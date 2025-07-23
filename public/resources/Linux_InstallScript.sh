#!/bin/bash -i

###############################################
# Setup
###############################################

# Define variables for options
no_vscode=false
no_clang=false
no_sudo_check=false
no_dotnet=false
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
no_zsh=false

# Check platform
platform=$(uname -m)
if [[ "$platform" == "x86_64" ]]; then
    echo "Platform: AMD64"
elif [[ "$platform" == "aarch64" ]]; then
    echo "Platform: ARM 64"
else
    echo "Unknown platform: $platform"
fi

# Check OS 64 bit or 32 bit
os_bit=$(getconf LONG_BIT)

###############################################
# Functions
###############################################

# Function to display help message
function display_help() {
    # Display Help
    echo "This script is used to setup and install coding environment for the"
    echo "programmers field guide https://programmers.guide/"
    echo
    echo "Syntax: $0 options"
    echo "options:"
    echo "-h or --help           Print this Help."
    echo "--no_vscode            Do not install VS Code."
    echo "--no_clang             Do not install clang."
    echo "--no_dotnet            Do not install .NET."
    # echo "--splashkit_url=<url>  Specify the url to the splashkit install script."
    echo "--no_zsh               Do not install zsh."
    echo
}

###############################################
# Process the input options
###############################################

# Process command-line arguments
for arg in "$@"; do
    case $arg in
    --no_vscode)
        no_vscode=true
        ;;
    --no_clang)
        no_vscode=true
        ;;
    --no_sudo_check)
        no_sudo_check=true
        ;;
    --no_dotnet)
        no_dotnet=true
        ;;
    --no_zsh)
        no_zsh=true
        ;;
    -h | --help)
        display_help
        exit 0
        ;;
    *)
        echo "Invalid option: $arg" >&2
        ;;
    esac
done

###############################################
# Main Script
###############################################

sudo apt-get update

# Check if wget is installed
if ! command -v wget &>/dev/null; then
    echo "wget is not installed. Installing..."
    sudo apt-get -y install wget
fi

# Check if git is installed
if ! command -v git &>/dev/null; then
    echo "git is not installed. Installing..."
    sudo apt-get -y install git
fi

# Check if curl is installed
if ! command -v curl &>/dev/null; then
    echo "curl is not installed. Installing..."
    sudo apt-get -y install curl
fi

if [[ "$no_zsh" == false ]]; then
    # Check if zsh is installed
    if ! command -v zsh &>/dev/null; then
        echo "zsh is not installed. Installing..."
        sudo apt-get -y install zsh
    fi

    # Set ZSH as default shell
    sudo chsh -s $(which zsh) $USER
fi

# Check if VS Code is installed
if command -v code &>/dev/null; then
    echo "VS Code already installed."
elif [[ "$no_vscode" == false ]]; then
    if [[ "$platform" == "aarch64" ]]; then
        # Install VS Code Rasbery PI environment
        echo "Installing VS Code Rasbery PI environment..."
        sudo apt install code

    else
        # Install VS Code Debian environment
        echo "Installing VS Code Debian environment..."
        wget -O vscode.deb https://go.microsoft.com/fwlink/?LinkID=760868
        sudo dpkg -i vscode.deb
        sudo apt-get install -f
        rm vscode.deb
    fi
fi

# Install VS Code extensions
if command -v code &>/dev/null; then
    # Check if C/C++ extension is installed
    if ! code --list-extensions | grep -q "ms-vscode.cpptools"; then
        echo "Installing C/C++ VS_Code extension..."
        code --install-extension ms-vscode.cpptools
    fi

    # Check if C# extension is installed
    if ! code --list-extensions | grep -q "ms-dotnettools.csharp"; then
        echo "Installing C# VS_Code extension..."
        code --install-extension ms-dotnettools.csharp
    fi
fi

# Install if clang is installed
if command -v clang &>/dev/null; then
    echo "clang already installed."
elif [[ "$no_clang" == false ]]; then
    # Install clang
    echo "Installing clang..."
    sudo apt-get -y install clang
fi

# Install .NET
if [[ "$no_dotnet" == false ]]; then
    if ! command -v dotnet &>/dev/null; then
        echo "Installing .NET..."
        curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin

        if command -v bash &>/dev/null; then
            if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.bashrc; then
                echo 'export DOTNET_ROOT=$HOME/.dotnet' >>~/.bashrc
            fi
            if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.bashrc; then
                echo 'export PATH=$PATH:$HOME/.dotnet' >>~/.bashrc
            fi
        fi

        if command -v zsh &>/dev/null; then
            if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.zshrc; then
                echo 'export DOTNET_ROOT=$HOME/.dotnet' >>~/.zshrc
            fi
            if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.zshrc; then
                echo 'export PATH=$PATH:$HOME/.dotnet' >>~/.zshrc
            fi
        fi
    fi
fi

# Install Splashkit
echo "Installing Splashkit..."
bash <(curl -s $splashkit_url)

# Add Programers Field guide to Menu
echo "Adding Programers Field guide to Menu"
sudo curl -s "https://raw.githubusercontent.com/splashkit/the-programmers-field-guide/main/public/favicon.svg" -o /usr/share/pixmaps/fieldguide.svg

touch ~/programmers-field-guide.desktop
echo "[Desktop Entry]" >>~/programmers-field-guide.desktop
echo "Type=Application" >>~/programmers-field-guide.desktop
echo "Name=Programmers Field Guide" >>~/programmers-field-guide.desktop
echo "TryExec=/usr/bin/x-www-browser" >>~/programmers-field-guide.desktop
echo "Exec=/usr/bin/x-www-browser https://programmers.guide/" >>~/programmers-field-guide.desktop
echo "Icon=/usr/share/pixmaps/fieldguide.svg" >>~/programmers-field-guide.desktop
echo "Categories=Development;" >>~/programmers-field-guide.desktop
sudo mv ~/programmers-field-guide.desktop /usr/share/applications/programmers-field-guide.desktop

echo "Installation Complete"
echo "Please restart your terminal to use commands such as skm or dotnet"
if [[ "$zsh" == true ]]; then
    echo "Please Reboot your computer to enable ZSH"
fi
