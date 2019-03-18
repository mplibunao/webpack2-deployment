### Github pages

- https://mplibunao.github.io/webpack2-deployment/#/

To push only the contents of the `dist` folder run

```
git subtree push --prefix dist origin gh-pages
``` 

### S3

-  http://mp-webpack2-s3-deploy.s3-website-us-east-1.amazonaws.com

```
npm install -g s3-website
touch .env
# Fill the AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY 

# Create the s3 bucket
s3-website create <name-of-bucket>
s3-website deploy dist
```

```
https://github.com/klaemo/s3-website
Your AWS credentials should either be in ~/.aws/credentials, a file in the local directory entitled .env with the values

AWS_ACCESS_KEY_ID=MY_KEY_ID
AWS_SECRET_ACCESS_KEY=MY_SECRET_KEY
or in the environment variables AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY.

Your website policy and configuration will only be sent to S3 when it differs from the existing.
```

### Heroku

- Create a `Procfile` and indicate the command to run our application

```
heroku create
git push heroku master
```
