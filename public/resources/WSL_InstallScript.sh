#!/bin/bash

# -----------------------------------------------------
# Variables
# -----------------------------------------------------

# Define urls
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
repo_version=$(if command -v lsb_release &>/dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)
dotnet_pkg_url="https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb"

# -----------------------------------------------------
# 1. Update and Install required packages
# -----------------------------------------------------

if ! command -v wget &>/dev/null || ! command -v git &>/dev/null || ! command -v curl &>/dev/null; then
    echo "Updating package databases..."
    sudo apt update

    echo "Installing required packages..."
    sudo apt -y install wget git curl
fi

# -----------------------------------------------------
# 2. Install Visual Studio Code
# -----------------------------------------------------

echo ""

# Check if VS Code needs to be installed
if ! command -v code &>/dev/null; then
    echo "Downloading Visual Studio Code installer..."
    powershell.exe -Command "winget install -e --id Microsoft.VisualStudioCode"
else
    echo "Visual Studio Code is already installed. Skipping..."
fi

# # -----------------------------------------------------
# # 3. Install .NET SDK (not in use)
# # -----------------------------------------------------

# # Check if .NET SDK is installed
# if ! command -v dotnet &>/dev/null; then
#     echo "Installing .NET 8.0 ..."
#     wget $dotnet_pkg_url -O packages-microsoft-prod.deb
#     sudo dpkg -i packages-microsoft-prod.deb
#     rm packages-microsoft-prod.deb
#     sudo apt update
#     sudo apt install -y dotnet-sdk-8.0 dotnet-runtime-8.0

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
#     echo ".NET 8.0 SDK is already installed."
# fi

# -----------------------------------------------------
# 4. Install SplashKit
# -----------------------------------------------------

echo ""

if ! command -v skm &>/dev/null; then
    echo "Installing Splashkit..."
    bash <(curl -s $splashkit_url)

else
    echo "SplashKit already installed. Skipping..."
fi

export PATH="~/.splashkit:$PATH"

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

echo ""
echo "Installation complete. Please restart your terminal for changes to take effect."
