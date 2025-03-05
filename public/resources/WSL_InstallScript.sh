#!/bin/bash

# -----------------------------------------------------
# Variables
# -----------------------------------------------------

# Define urls
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)
dotnet_pkg_url="https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb"

# -----------------------------------------------------
# 1. Update and Install required packages
# -----------------------------------------------------

echo "Updating package databases..."
sudo apt update

echo "Installing required packages..."
sudo apt -y install wget git curl clang build-essential g++ gdb

# -----------------------------------------------------
# 2. Install SplashKit
# -----------------------------------------------------

echo "Installing Splashkit..."

bash <(curl -s $splashkit_url)

if command -v bash &> /dev/null; then
    if ! grep -q 'export PATH=$PATH:~/.splashkit' ~/.bashrc; then
        echo 'export PATH=$PATH:~/.splashkit' >> ~/.bashrc
    fi
fi

export PATH=$PATH:~/.splashkit

#run with yes input to answer yes to apt-get request
yes | skm linux install

# -----------------------------------------------------
# 3. Install .NET SDK
# -----------------------------------------------------

# Check if .NET SDK is installed
if ! command -v dotnet &> /dev/null; then
    echo "Installing .NET 8.0 ..."
    wget $dotnet_pkg_url -O packages-microsoft-prod.deb
    sudo dpkg -i packages-microsoft-prod.deb
    rm packages-microsoft-prod.deb
    sudo apt update
    sudo apt install -y dotnet-sdk-8.0 dotnet-runtime-8.0
    
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
    echo ".NET 8.0 SDK is already installed."
fi

# -----------------------------------------------------
# 4. Install Visual Studio Code
# -----------------------------------------------------

# Check if VS Code needs to be installed
if ! command -v code &> /dev/null
then
    echo "Downloading Visual Studio Code installer..."
    powershell.exe -Command "winget install -e --id Microsoft.VisualStudioCode"
fi

# Define paths
WIN_USER=`powershell.exe -Command "[System.Environment]::UserName" | sed 's/\r$//'`
VSCODE_PATH=`cd /mnt/c/Users/$WIN_USER/AppData/Local/Programs/Microsoft\ VS\ Code/bin; pwd` #VS Code path to 'code' (to avoid need for restarting shell)

# -----------------------------------------------------
# 5. Install VS Code extensions for C++ and C# 
# -----------------------------------------------------

# Check if VS Code is installed
if command -v "$VSCODE_PATH/code" &> /dev/null; then
    echo ""
    echo "Installing VS Code extensions..."

    # Check if WSL extension is installed
    if ! "$VSCODE_PATH/code" --list-extensions | grep -q "ms-vscode-remote.remote-wsl"; then
        echo ""
        echo "WSL:"
        "$VSCODE_PATH/code" --install-extension ms-vscode-remote.remote-wsl
    fi

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
else
    echo "Visual Studio Code missing..."
    echo "Please install VS Code for Windows from https://code.visualstudio.com/download."
    echo "Then copy/paste the following lines and run in a new terminal window:"
    echo "code --install-extension ms-vscode-remote.remote-wsl"
    echo "code --install-extension ms-vscode.cpptools-extension-pack"
    echo "code --install-extension ms-dotnettools.csharp"
    echo "code --install-extension ms-dotnettools.csdevkit"
    echo "code --install-extension ms-dotnettools.vscodeintellicode-csharp"
    echo ""
fi

echo ""
echo "Installation complete. Please restart your terminal for changes to take effect."
