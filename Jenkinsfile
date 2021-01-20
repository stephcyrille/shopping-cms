pipeline {
  agent any
  stages {
    stage('Builf Frontend') {
      agent any
      steps {
        sh 'cd frontend/'
        sh 'npm run buildfront'
        sh 'npm run buildback'
      }
    }

  }
}