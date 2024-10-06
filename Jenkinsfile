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
    }
}
