FROM mcr.microsoft.com/devcontainers/javascript-node:0-20

# Install OpenJDK-8
RUN apt-get update && \
    apt-get install -y openjdk-11-jdk && \
    apt-get install -y ant && \
    apt-get clean;
    
# Fix certificate issues
RUN apt-get update && \
    apt-get install ca-certificates-java && \
    apt-get clean && \
    update-ca-certificates -f;

RUN ln -s `readlink -f /usr/bin/java | sed "s:bin/java::"` /usr/local/java

ENV JAVA_HOME /usr/local/java
