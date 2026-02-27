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

if ! command -v git &>/dev/null; then
    echo "Installing required packages..."
    pacman -S git --noconfirm --disable-download-timeout
fi

# -----------------------------------------------------
# 2. Install Visual Studio Code
# -----------------------------------------------------

echo ""

# Check if VS Code needs to be installed
if ! command -v code &>/dev/null; then
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
    echo "Visual Studio Code is already installed. Skipping..."
fi

# Fix issue where .bash_history is not updated with commands used in the integrated VS Code terminal
if ! grep -q "PROMPT_COMMAND='history -a'" ~/.bashrc; then
    echo "PROMPT_COMMAND='history -a'" >> ~/.bashrc
fi

# # -----------------------------------------------------
# # 2. Install .NET SDK (not in use)
# # -----------------------------------------------------

# # Check if .NET SDK is installed
# if ! command -v dotnet &>/dev/null; then
#     echo "Downloading .NET SDK installer..."
#     curl -L $dotnet_sdk_url -o dotnet-sdk-installer.exe

#     echo "Installing .NET SDK..."
#     echo "Click "Yes" in pop-up Window if it appears."
#     powershell.exe -Command "Start-Process dotnet-sdk-installer.exe -ArgumentList '/quiet /norestart' -Wait"
#     if [ $? -ne 0 ]; then
#         echo ".NET SDK installation failed. Please try installing it manually. Then run this script again."
#         exit 1
#     fi
#     rm dotnet-sdk-installer.exe

#     # Add .NET environment variables
#     if command -v bash &>/dev/null; then
#         if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.bashrc; then
#             echo 'export DOTNET_ROOT=$HOME/.dotnet' >>~/.bashrc
#         fi
#         if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.bashrc; then
#             echo 'export PATH=$PATH:$HOME/.dotnet' >>~/.bashrc
#         fi
#     fi
# else
#     echo ".NET SDK is already installed."
# fi

# -----------------------------------------------------
# 3. Install SplashKit
# -----------------------------------------------------

echo ""

if ! command -v skm &>/dev/null; then
    echo "Installing SplashKit..."
    bash <(curl -s $splashkit_url)
else
    echo "SplashKit already installed. Skipping..."
fi

# -----------------------------------------------------
# 5. Update settings.json file if empty
# 6. Install VS Code extensions for C++ and C#
# -----------------------------------------------------

echo ""

if ! command -v skm &>/dev/null; then
    "~/.splashkit/vscode/settings/skm_vscode_settings.sh"
    "~/.splashkit/vscode/extensions/skm_vscode_extensions.sh"
else
    skm vscode settings
    skm vscode extensions
fi

# -----------------------------------------------------

echo ""
echo "Installation complete. You may need to restart your terminal if the \"skm\" command is not found."
