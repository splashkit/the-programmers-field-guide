#!/bin/bash

# -----------------------------------------------------
# Variables
# -----------------------------------------------------

# Define urls
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
dotnet_sdk_url="https://download.visualstudio.microsoft.com/download/pr/90486d8a-fb5a-41be-bfe4-ad292c06153f/6673965085e00f5b305bbaa0b931cc96/dotnet-sdk-8.0.300-win-x64.exe"
vscode_installer_url="https://aka.ms/win32-x64-user-stable"

# Define options
no_cpp=false
no_dotnet=false
no_vscode=false

# -----------------------------------------------------
# Functions
# -----------------------------------------------------

# Function to display help message
function display_help() {
   # Display Help
   echo "This script is used to setup and install coding environment for the"
   echo "programmers field guide https://programmers.guide/"
   echo
   echo "Syntax: $0 options"
   echo "options:"
   echo "-h or --help           Print this Help"
   echo "--no_cpp               Do not install C++ tools"
   echo "--no_dotnet            Do not install .NET environment"
   echo "--no_vscode            Do not install Visual Studio Code or any extensions."
   echo
}

function install_packages()
{
    # Update package databases
    echo "Updating package databases..."
    pacman -Syy

    # Install required packages
    echo "Installing required packages..."
    pacman -S git curl mingw-w64-x86_64-clang --needed --noconfirm --disable-download-timeout
    # pacman -S git curl unzip mingw-w64-{x86_64,i686}-clang --needed --noconfirm --disable-download-timeout
}

function install_splashkit()
{
    # Install SplashKit
    echo "Installing SplashKit..."

    bash <(curl -s $splashkit_url)

    if command -v bash &> /dev/null; then
        if ! grep -q 'export PATH=$PATH:~/.splashkit' ~/.bashrc; then
            echo 'export PATH=$PATH:~/.splashkit' >> ~/.bashrc
        fi
    fi

    export PATH=$PATH:~/.splashkit

    if [ -d ~/.splashkit/global ]; then
        echo "Installing SplashKit global"
        skm global install
    fi
}

function install_dotnet()
{
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
    else
        echo ".NET SDK is already installed."
    fi

    # Add .NET environment variables
    if command -v bash &> /dev/null; then
        if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.bashrc; then
            echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
        fi
        if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.bashrc; then
            echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
        fi
    fi
}

function install_cpp_tools()
{
    # Install C++ tools (before SplashKit)
    echo "Installing C++ tools..."
    pacman -S --needed --noconfirm mingw-w64-x86_64-gcc mingw-w64-x86_64-gdb mingw-w64-x86_64-make mingw-w64-x86_64-toolchain
}

function install_vscode()
{
    # Check if VS Code is installed
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
}

function install_vscode_extensions()
{
    echo ""
    echo "Installing VS Code extensions..."

    # Create variable to VS Code path to 'code' (to avoid need for restarting shell)
    VSCODE_PATH=`cd $LOCALAPPDATA/Programs/Microsoft\ VS\ Code/bin; pwd`

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
}

# -----------------------------------------------------
# Process the input options.
# -----------------------------------------------------

# Process command-line arguments
for arg in "$@"; do
    case $arg in
        --no_cpp)
            no_cpp=true
            ;;
        --no_dotnet)
            no_dotnet=true
            ;;
        --no_vscode)
            no_vscode=true
            ;;
        -h|--help)
            display_help
            exit 0
            ;;
        *)
            echo "Invalid option: $arg" >&2
            ;;
    esac
done

# -----------------------------------------------------
# Main script
# -----------------------------------------------------

# Install required packages
install_packages

# -----------------------------------------------------

# Install SplashKit
install_splashkit

# -----------------------------------------------------

# Install .NET SDK
if [[ "$no_dotnet" == false ]]; then
    install_dotnet
fi

# -----------------------------------------------------

# Install C++ tools
if [[ "$no_cpp" == false ]]; then
    install_cpp_tools
fi

# -----------------------------------------------------

if [[ "$no_vscode" == false ]]; then
    install_vscode
    install_vscode_extensions
fi

# -----------------------------------------------------

echo "Installation complete. Please restart your terminal for changes to take effect."