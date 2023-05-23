# PROJECT DESCRIPTION
# Problem Statement:
* To develop a streaming webserver, that can handle 100 concurrent users. The system would need to be able to stream audio, video or other multimedia content to multiple users simultaneously.
# Introduction:
* The web application "Streaming webserver" it can handle more number of concurrent users without any buffering intteruption while playing video and audio files.
* It can accessible on any device through interent.
# Implementation Details
* STEPS TO IMPLEMENT AN  STREAMING APPLICATION USING AWS:
* STEP1: Create an AWS account(free tier) and sign in.
* STEP2: Goto AWS Management Console and Select S3(Simple Storage Service).
* STEP3: Create a new S3 bucket.
* STEP4: Store Audio & Video files into S3 bucket.Each file generate a  valid "key".
* STEP5: Search and Select CloudFront in AWS Management Console.
* STEP6: Configure this CloudFront with S3 bucket which is stored audio & video files.
* STEP7: After configuration the Cloudfront Will Generate Valid "Domain Name".
* STEP8: The Combination of Domain Name & Key will provides a final "URL".
* Ex: https://d1k386wu9uo20h.cloudfront.net/hackothan/index.html
* STEP9: By Using URL We can visit the web page and Stream the A/V files.

# Code files
* audios.html & videos.html (front end)
* audios.css & videos.css (front end styles)
* audios.js & videos.js (back end)
* index.html (Streaming Server webpage)

# Benefits of AWS for Streaming Webserver:
* Data Security
* S3 Bucket:Storage
* Load Balanciers: Manages & Processes the Concurrent requests.
* CloudFront: Reduces the Latency(delay time)

# OUTCOMES:
Visit Streaming Webserver through below url 100+ concurrent users at a time,it will work without any buffering issues.
https://d1k386wu9uo20h.cloudfront.net/hackothan/index.html

# Team Members
1. K.Siva Prathap(Team Leader)
2. B.Venu Gopal
3. S.Sohail
4. M.Anil Kumar
5. M.Hari
6. V.Ramji
7. E.Sai Vikas

# TEAM ACKNOWLEDGEMENT
We would like to express our special thanks to RGMCET Management and BYTS INDIA Team for conducting and supporting,24 hours HACKTHON in a peaceful environment.

# Connect
For any queries & suggestions please contact kaminikondasivaprathap@gmail.com




