```bash
gcloud config set compute/zone us-central1-a
gcloud container clusters create my-cluster
gcloud container clusters get-credentials my-cluster
kubectl create deployment hello-server --image=[gcr.io/google-samples/hello-app:1.0](<http://gcr.io/google-samples/hello-app:1.0>)
kubectl expose deployment hello-server --type=LoadBalancer --port 8080
kubetl get service
gcloud container cluster delete my-cluster
gcloud compute firewall-rules create www-firewall-network-lb     --target-tags network-lb-tag --allow tcp:80
gcloud compute addresses create network-lb-ip-1 \\
 --region us-central1
```

gcloud compute instance-templates create lb-backend-template \ --region=default \ --network=default \ --subnet=default \ --tags=allow-health-check \ --image-family=debian-9 \ --image-project=debian-cloud \ --metadata=startup-script='#! /bin/bash cat << EOF > [startup.sh](http://startup.sh/) #! /bin/bash apt-get update apt-get install -y nginx service nginx start sed -i -- 's/nginx/Google Cloud Platform - '"\$HOSTNAME"'/' /var/www/html/index.nginx-debian.html EOF’

[https://www.youtube.com/watch?v=xAAn7Cgu-OE](https://www.youtube.com/watch?v=xAAn7Cgu-OE)

[https://www.youtube.com/watch?v=_ckChw6NuoI](https://www.youtube.com/watch?v=_ckChw6NuoI)