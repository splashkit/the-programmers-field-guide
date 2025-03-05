#!/bin/bash

# -----------------------------------------------------
# Variables
# -----------------------------------------------------

# Define urls
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
dotnet_sdk_url="https://download.visualstudio.microsoft.com/download/pr/90486d8a-fb5a-41be-bfe4-ad292c06153f/6673965085e00f5b305bbaa0b931cc96/dotnet-sdk-8.0.300-win-x64.exe"
vscode_installer_url="https://aka.ms/win32-x64-user-stable"
settings_json_url="https://programmers.guide/resources/msys2-settings.json"

# -----------------------------------------------------
# 1. Update and Install required packages
# -----------------------------------------------------

echo "Updating package databases..."
pacman -Syy

echo "Installing required packages..."
pacman -S git mingw-w64-x86_64-clang mingw-w64-x86_64-gcc mingw-w64-x86_64-gdb --noconfirm --disable-download-timeout

# -----------------------------------------------------
# 2. Install SplashKit
# -----------------------------------------------------

echo "Installing SplashKit..."

bash <(curl -s $splashkit_url)

if command -v bash &> /dev/null; then
    if ! grep -q 'export PATH=$PATH:~/.splashkit' ~/.bashrc; then
        echo 'export PATH=$PATH:~/.splashkit' >> ~/.bashrc
    fi
fi

export PATH=$PATH:~/.splashkit

if [ -d ~/.splashkit/windows ]; then
    echo "Installing Windows dependencies"
    skm windows install
fi

# -----------------------------------------------------
# 3. Install .NET SDK
# -----------------------------------------------------

# Check if .NET SDK is installed
if ! command -v dotnet &> /dev/null
then
    echo "Downloading .NET SDK installer..."
    curl -L $dotnet_sdk_url -o dotnet-sdk-installer.exe

    echo "Installing .NET SDK..."
    echo "Click "Yes" in pop-up Window if it appears."
    powershell.exe -Command "Start-Process dotnet-sdk-installer.exe -ArgumentList '/quiet /norestart' -Wait"
    if [ $? -ne 0 ]; then
        echo ".NET SDK installation failed. Please try installing it manually."
        exit 1
    fi
    rm dotnet-sdk-installer.exe

    # Add .NET environment variables
    if command -v bash &> /dev/null; then
        if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.bashrc; then
            echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
        fi
        if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.bashrc; then
            echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
        fi
    fi
else
    echo ".NET SDK is already installed."
fi

# -----------------------------------------------------
# 4. Install Visual Studio Code
# -----------------------------------------------------

# Check if VS Code needs to be installed
if ! command -v code &> /dev/null
then
    echo "Downloading Visual Studio Code installer..."
    curl -L $vscode_installer_url -o vscode-installer.exe

    echo "Installing Visual Studio Code..."
    powershell.exe -Command "Start-Process vscode-installer.exe -ArgumentList '/silent /mergetasks=!runcode' -Wait"
    if [ $? -ne 0 ]; then
        echo "Visual Studio Code installation failed. Please try installing it manually from https://code.visualstudio.com/download, then run this script again."
        exit 1
    fi
    rm vscode-installer.exe
else
    echo "Visual Studio Code is already installed."
fi

# Define paths
SETTINGS_JSON_PATH="$APPDATA/Code/User"
VSCODE_PATH=`cd $LOCALAPPDATA/Programs/Microsoft\ VS\ Code/bin; pwd` #VS Code path to 'code' (to avoid need for restarting shell)

# -----------------------------------------------------
# 5. Replace settings.json file if empty
# -----------------------------------------------------

echo ""
echo "Checking VS Code settings.json file size..."
cd $SETTINGS_JSON_PATH
 
# empty settings = <= 5 bytes
if [ $(wc -c < "settings.json") -le 5 ]; then
    echo "Adding MSYS2/MINGW64 terminal settings to settings.json file..."
 
    curl -O "$settings_json_url"
    mv msys2-settings.json settings.json
else
    echo "Cannot add MSYS2/MINGW64 terminal settings to VS Code settings.json file."
    echo "You will need to update settings.json file manually."
fi

cd ~

# -----------------------------------------------------
# 6. Install VS Code extensions for C++ and C# 
# -----------------------------------------------------

echo ""
echo "Installing VS Code extensions..."

# Install VS Code extensions
if command -v "$VSCODE_PATH/code" &> /dev/null; then
    
    # Check if C/C++ extension is installed
    if ! "$VSCODE_PATH/code" --list-extensions | grep -q "ms-vscode.cpptools-extension-pack"; then
        echo ""
        echo "C/C++ Extension Pack:"
        "$VSCODE_PATH/code" --install-extension ms-vscode.cpptools-extension-pack
    fi

    # Check if "C#" extension is installed
    if ! "$VSCODE_PATH/code" --list-extensions | grep -q "ms-dotnettools.csharp"; then
        echo ""
        echo "C#:"
        "$VSCODE_PATH/code" --install-extension ms-dotnettools.csharp
    fi

    # Check if "C# Dev Kit" extension is installed
    if ! "$VSCODE_PATH/code" --list-extensions | grep -q "ms-dotnettools.csdevkit"; then
        echo ""
        echo "C# Dev Kit:"
        "$VSCODE_PATH/code" --install-extension ms-dotnettools.csdevkit
    fi

    # Check if "Intellicode for C# Dev Kit" extension is installed
    if ! "$VSCODE_PATH/code" --list-extensions | grep -q "ms-dotnettools.vscodeintellicode-csharp"; then
        echo ""
        echo "Intellicode for C# Dev Kit:"
        "$VSCODE_PATH/code" --install-extension ms-dotnettools.vscodeintellicode-csharp
    fi
fi

# -----------------------------------------------------

echo ""
echo "Installation complete. Please restart your terminal for changes to take effect."