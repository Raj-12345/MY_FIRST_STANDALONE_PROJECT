pipeline {
    agent any

    tools {nodejs "node"}

    stages {
        stage('Git Clonning') {
            steps {
                git branch:'main',url:'https://github.com/Raj-12345/MY_FIRST_STANDALONE_PROJECT.git'
            }
        }
        stage('Install Depedency') {
            steps {
                sh 'npm install --prod'
            }
        }
        stage('Start Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage("Upload to S3") {
            steps {
                withAWS(credentials: 'aws-user-s3-id', region: 'ap-south-1') {
                    // Upload all files in the dist/ folder to S3
                    s3Upload(acl: 'Private', bucket: 'myangularjenkinesbucket ', includePathPattern: '**/*', workingDir: 'dist/my-first-standalone-project/')
                }
            }
        }
    }
}
