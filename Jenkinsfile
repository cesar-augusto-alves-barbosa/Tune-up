pipeline {
    agent any
    stages {
    // by thirsu 26/11/2021 04AM:00
        stage('Teste') {
            steps {
               sh 'ssh -i "back-end-keys.pem" ubuntu@ec2-3-219-66-150.compute-1.amazonaws.com'
            }
        }
    }
}
