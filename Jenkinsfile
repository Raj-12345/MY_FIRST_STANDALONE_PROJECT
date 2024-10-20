pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Git Clonning') {
            steps {
                echo '--------------------------------Starting Git Clone-------------------------'
                git branch:'main',url:'https://github.com/Raj-12345/MY_FIRST_STANDALONE_PROJECT.git'
                echo '---------------------------------Git Clone Sucess---------------------------'
            }
        }
        stage('Install Depedency') {
            steps {
                echo '--------------------------------Start npm install -------------------------'
                sh 'npm install '
                echo '--------------------------------Ended npm install-------------------------'
            }
        }
        stage('Start Build') {
            steps {
                echo '--------------------------------Starting npm run build-------------------------'
                sh 'npm run build'
                echo '-------------------------------Ended npm run build---------------------------'
            }
        }
        stage("Upload to S3") {
            steps {
                echo '-------------------------------Start S3 Upload---------------------------'
                withAWS(credentials: 'aws-user-s3-id', region: 'ap-south-1') {
                    // Upload all files in the dist/ folder to S3
                    s3Upload(bucket: 'myangularjenkinesbucket', includePathPattern: '**/*', workingDir: 'dist/my-first-standalone-project/')
                }
                echo '-------------------------------Ended S3 Upload---------------------------'
            }
        }
    }
}
