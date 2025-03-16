Complete Guide to Setting Up an EC2 Instance on AWS 🚀

    EC2 (Elastic Compute Cloud) is a virtual server that runs on AWS. It allows you to host applications, websites, and more. Follow this complete step-by-step guide to launch your EC2 instance.

    🔹 Step 1: Log in to AWS Console

        Go to AWS Console.
        Click "Sign in to the Console" and enter your AWS account credentials.
        In the AWS Management Console, search for "EC2" and select it.

    🔹 Step 2: Launch an EC2 Instance

        In the EC2 Dashboard, click "Launch Instance".
        Enter a Name for your instance (e.g., "MyServer").

    🔹 Step 3: Choose an Amazon Machine Image (AMI)

        Amazon Linux (Recommended for AWS usage)
        Ubuntu (Popular for web hosting & development)
        Windows Server (If you need Windows OS)
        For most users, select Ubuntu 22.04 LTS or Amazon Linux 2023.

    🔹 Step 4: Choose an Instance Type

        Instance type defines CPU, RAM, and Network Performance.

        t2.micro (Free Tier Eligible) – Good for small applications.
        t3.micro or t3.small – Better performance.
        Select t2.micro for the Free Tier.

    🔹 Step 5: Configure Instance Settings (Optional)

        Number of Instances → Keep it 1 (default).
        Networking → Keep the default VPC & Subnet.
        Enable Auto-Assign Public IP (So you can access it via SSH).
        Click Next: Add Storage.

    🔹 Step 6: Add Storage (Disk Space)

        Default: 8GB (Free Tier) – Good for basic applications.
        You can increase to 20GB if needed.
        Click Next: Add Tags.

    🔹 Step 7: Add Tags (Optional)

        Tags help organize your EC2 instances.

        Click "Add Tag", enter:
        Key: Name
        Value: MyEC2Server
        Click Next: Configure Security Group.

    🔹 Step 8: Configure Security Group (Firewall Rules)

        Security groups control network access.

        Default Rule: SSH (Port 22) – To connect via SSH.
        Add HTTP (Port 80) – If hosting a website.
        Add HTTPS (Port 443) – For SSL-enabled websites.
        Select Anywhere (0.0.0.0/0) for now (can be changed later).
        Click Review and Launch.

    🔹 Step 9: Create a Key Pair (For Secure SSH Login)

        Select Create a new key pair.
        Name it my-ec2-key.
        Click Download Key Pair (VERY IMPORTANT – Save it safely!).
        Click Launch Instance.
        ✅ Your EC2 instance is now launching! 🎉


    🔹 Step 10: Connect to Your EC2 Instance via SSH

        1. Get the Public IP of Your Instance
         
            Go to EC2 Dashboard > Instances.
            Copy the Public IPv4 Address.

        2. Open Your Terminal (Mac/Linux) or Command Prompt (Windows)
        
            Run the following command to connect:

                ssh -i /path/to/my-ec2-key.pem ubuntu@your-public-ip

            Example:

                ssh -i ~/Downloads/my-ec2-key.pem ubuntu@3.123.45.67

        If asked "Are you sure you want to continue connecting?", type yes and press Enter.

        ✅ You are now connected to your EC2 instance! 🎉


    🔹 Step 11: Secure Your Server (Optional but Recommended)

        1. Update & Upgrade Packages

                sudo apt update && sudo apt upgrade -y

        2. Add a New User (Optional)

                sudo adduser myuser
                sudo usermod -aG sudo myuser

        3. Enable Firewall

                sudo ufw allow OpenSSH
                sudo ufw enable 


    🔹 Step 12: Install a Web Server (Optional)

        If you want to host a website, install Apache or Nginx.

        Install Apache:

            sudo apt install apache2 -y
            sudo systemctl start apache2
            sudo systemctl enable apache2 

        Now, visit http://your-public-ip in your browser, and you’ll see the Apache default page! 🎉


    🔹 Step 13: Stop or Terminate Your Instance
    
        If not using the EC2 instance, stop or terminate it to avoid charges.
        Go to EC2 Dashboard > Instances.
        Click on your instance → Instance State → Stop or Terminate.
        ✅ Summary
        🔹 EC2 is a virtual server on AWS.
        🔹 Choose Ubuntu (or Amazon Linux) + t2.micro (Free Tier).
        🔹 Use SSH to connect with a key pair.
        🔹 Install Apache/Nginx to host a website.
        🔹 Stop your instance when not in use to save costs.
