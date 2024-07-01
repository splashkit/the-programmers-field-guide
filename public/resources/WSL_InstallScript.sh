#!/bin/bash -i

###################################################################################################
# Setup                                                                                           #
###################################################################################################

splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
repo_version=$(if command -v lsb_release &> /dev/null; then lsb_release -r -s; else grep -oP '(?<=^VERSION_ID=).+' /etc/os-release | tr -d '"'; fi)
dotnet_pkg_url="https://packages.microsoft.com/config/ubuntu/$repo_version/packages-microsoft-prod.deb"

# Define variables for options
no_sudo_check=false
no_clang=false
no_dotnet=false
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

###################################################################################################
# Functions                                                                                       #
###################################################################################################

# Function to display help message
function display_help() {
   # Display Help
   echo "This script is used to setup and install coding environment for the"
   echo "programmers field guide https://programmers.guide/"
   echo
   echo "Syntax: $0 options"
   echo "options:"
   echo "-h or --help           Print this Help."
   echo "--no_clang             Do not install clang."
   echo "--no_dotnet            Do not install .NET."
   echo
}


###################################################################################################
# Process the input options.     			                                                      #
###################################################################################################
# Process command-line arguments
for arg in "$@"; do
    case $arg in
        --no_clang)
            no_clang=true
            ;;
        --no_sudo_check)
            no_sudo_check=true
            ;;
        --no_dotnet)
            no_dotnet=true
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

###################################################################################################
# Main Script    			                                                                      #
###################################################################################################

# Update package lists
sudo apt-get update

# Install required packages
# Check if wget is installed
if ! command -v wget &> /dev/null; then
    echo "wget is not installed. Installing..."
    sudo apt-get -y install wget
fi

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo "git is not installed. Installing..."
    sudo apt-get -y install git
fi

# Check if curl is installed
if ! command -v curl &> /dev/null; then
    echo "curl is not installed. Installing..."
    sudo apt-get -y install curl
fi


# Install Splashkit
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

# check if SplashKit Global is avalible
if [ -d ~/.splashkit/global ]; then
    echo "Installing SplashKit global"
    skm global install
fi

# Install .NET
if [[ "$no_dotnet" == false ]]; then
    if ! command -v dotnet &> /dev/null; then
        echo "Installing .NET..."
        wget $dotnet_pkg_url -O packages-microsoft-prod.deb
        sudo dpkg -i packages-microsoft-prod.deb
        rm packages-microsoft-prod.deb
        sudo apt update
        sudo apt-get install -y dotnet-sdk-8.0 dotnet-runtime-8.0
        
        if command -v bash &> /dev/null; then
            if ! grep -q 'export DOTNET_ROOT=$HOME/.dotnet' ~/.bashrc; then
                echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
            fi
            if ! grep -q 'export PATH=$PATH:$HOME/.dotnet' ~/.bashrc; then
                echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
            fi
        fi
    fi
fi

# Install C++ tools
# Check if clang is installed
# if command -v clang &> /dev/null; then
#     echo "clang already installed."
# elif [[ "$no_clang" == false ]]; then
if [[ "$no_clang" == false ]]; then
    # Install c++ tools
    echo "Installing C++ tools..."
    sudo apt-get -y install clang build-essential
fi

# Check if VS Code is installed
if ! command -v code &> /dev/null; then
    echo "VS Code missing..."
    echo "Please install VS Code from https://code.visualstudio.com/download and then run this script again."
    exit 1
fi

# Install VS Code extensions
if command -v code &> /dev/null; then
    # Check if C/C++ extension is installed
    if ! code --list-extensions | grep -q "ms-vscode.cpptools"; then
        echo "Installing C/C++ VS Code extension pack..."
        code --install-extension ms-vscode.cpptools-extension-pack
    fi

    # Check if C# extension is installed
    if ! code --list-extensions | grep -q "ms-dotnettools.csharp"; then
        echo "Installing C# VS Code extensions..."
        code --install-extension ms-dotnettools.csharp
        code --install-extension ms-dotnettools.csdevkit
        code --install-extension ms-dotnettools.vscodeintellicode-csharp
    fi
fi

echo "Installation complete. Please restart your terminal for changes to take effect."