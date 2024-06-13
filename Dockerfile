FROM ubuntu:20.04

# Install Python 3.8 and necessary build tools
RUN apt-get update && apt-get install -y \
    python3.8 python3.8-dev python3.8-distutils \
    build-essential cmake git lzip curl wget \
    libssl-dev libffi-dev && \
    apt-get clean

# Install SEAL dependenciess
RUN apt-get update && apt-get install -y \
    g++ make && \
    apt-get clean

# Clone and build SEAL library
RUN git clone https://github.com/microsoft/SEAL.git && \
    cd SEAL && \
    cmake . && \
    make -j4 && \
    make install

# Install Python dependencies
COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip install -r requirements.txt

# Copy project files
COPY . /app

# Expose port 8000
EXPOSE 8000

# Command to run the application
CMD ["python3.8", "manage.py", "runserver", "0.0.0.0:8000"]
