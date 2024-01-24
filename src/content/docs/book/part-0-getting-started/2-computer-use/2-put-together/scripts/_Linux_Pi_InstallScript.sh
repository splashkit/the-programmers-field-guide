#!/bin/bash -i

###################################################################################################
# Setup                                                                                           #
###################################################################################################

# Define variables for options
no_vscode=false
no_clang=false
no_sudo_check=false
no_dotnet=false
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"

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
   echo "-h or --help    Print this Help."
   echo "--no_vscode     Do not install VS Code."
   echo "--no_clang      Do not install clang."
   echo "--no_dotnet     Do not install .NET."
   echo "--splashkit_url=<url>  Specify the url to the splashkit install script."
   echo
}

###################################################################################################
# Process the input options.     			                                                      #
###################################################################################################
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
        --splashkit_url=*|--splashkit_url)
            if [[ "$arg" == "--splashkit_url" ]]; then
                shift
                splashkit_url="$1"
            else
                splashkit_url="${arg#*=}"
            fi
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

 sudo apt-get update

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

# Check if VS Code is installed
if command -v code &> /dev/null; then
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
if command -v code &> /dev/null; then
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
if command -v clang &> /dev/null; then
    echo "clang already installed."
elif [[ "$no_clang" == false ]]; then
    # Install clang
    echo "Installing clang..."
    sudo apt-get -y install clang
fi

# Install Splashkit
echo "Installing Splashkit..."

bash <(curl -s $splashkit_url)
export PATH=$PATH:~/.splashkit
source ~/.bashrc

#run with yes input to answer yes to apt-get request
yes | skm linux install

# check if SplashKit Global is avalible
if [ -d ~/.splashkit/global ]; then
    echo "Installing splashkit global"
    skm global install
fi


# Install .NET
if [[ "$no_dotnet" == false ]]; then
    if ! command -v dotnet &> /dev/null; then
        echo "Installing .NET..."
        curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin
        echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
        echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
        # export DOTNET_ROOT=$HOME/.dotnet
        # export PATH=$PATH:$HOME/.dotnet
        source ~/.bashrc
    fi
fi



echo "Installation Complete"
echo "Please restart your terminal to use commands such as skm or dotnet"
