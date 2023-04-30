# Docker

### Borrar todos los contenedores de una

         for i in $(docker image ls -a | awk '{print $1":"$2}' | tail -n +2); do docker image rm $i ; done
### Instalar docker

         add-apt-repository "deb [arch=amd64] <https://download.docker.com/linux/debian>​ $(lsb_release -cs) stable"

### Backup del directorio de instalacion

         tar -zcC /var/lib docker > /mnt/pd0/var_lib_docker-backup-$(date +%s).tar.gz
         tar -zcC /var/lib docker > /mnt/pve/NFShaka1/docker/var_lib_docker-backup-$(date +%s).tar.gz

### Ejemplo de configuracion para cambio de root path

         /etc/docker/daemon.json   <-- este archivo hay q crearlo
         {
            "data-root": "/mnt/sdc/iSCSI-Shaka2_Lun0"
         }

## Registry de Redhat

- (<https://access.redhat.com/RegistryAuthentication>)

         Registry                     Content
         registry.access.redhat.com   (Red Hat products)
         registry.redhat.io           (Red Hat products)
         registry.connect.redhat.com  (Third-party products)

### Como loguearse a la registry de Redhat

         docker login https://registry.access.redhat.com
         docker login https://registry.redhat.io
         docker login https://registry.connect.redhat.com

### Ejemplo

         root@ultron:~# docker login https://registry.access.redhat.com
         Username: username
         Password:
         WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
         Configure a credential helper to remove this warning. See
         https://docs.docker.com/engine/reference/commandline/login/#credentials-store

         Login Succeeded

         root@ultron:~# docker login https://registry.redhat.io
         Authenticating with existing credentials...
         WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
         Configure a credential helper to remove this warning. See
         https://docs.docker.com/engine/reference/commandline/login/#credentials-store

         Login Succeeded

         root@ultron:~# docker login https://registry.connect.redhat.com
         Username: username
         Password:
         WARNING! Your password will be stored unencrypted in /root/.docker/config.json.
         Configure a credential helper to remove this warning. See
         https://docs.docker.com/engine/reference/commandline/login/#credentials-store

         Login Succeeded
         root@ultron:~#

### Como buscar en la registry de Redhat

         docker search registry.redhat.io/rhel7/
         docker search registry.redhat.io/rhel8/

### Pull de una imagen de la registry de Redhat

         docker pull registry.redhat.io/rhel7/ipa-server

### Verificar el root dir

         docker info|grep "Docker Root Dir"

### Verificar el storage driver

         docker info | grep "Storage Driver"

         https://hub.docker.com/r/zopnow/lamp-stack/~/dockerfile/

         dpkg-reconfigure tzdata

         echo 'mysql-server mysql-server/root_password password password' | debconf-set-selections

## Etapa 1

################################################################### <br />

1- descargar contenedor <br />
2- ejecutar el contenedor en background <br />
 B.1 - abriendo puertos <br />
 B.2 - cambiando el hostname del container <br />
 B.3 - cambiamos en nombre del container <br />
C- Listamos todos los containers (prendidos y apagados) <br />
D- ingresamos al contenedor <br />
E- Exportamos el contenedor <br />

###################################################################

## A- Descargamos el contenedor

         docker pull linode/lamp
## B- Crear container 

- A partir de una imagen, abriendo el 443 hacia el host anfitrion y le cambiamos el hostname al contenedor

         docker run -p 443:443 -itd --hostname c-infra-lamp --name=c-infra-lamp  greyltc/lamp /bin/bash
         docker run -p 443:443 -p 80:80 -p 3306:3306 -p 6379:6379 --hostname c-infra-lamp --name=c-infra-lamp -itd c-infra-lamp:v.0.07 /bin/bash

## C- Listamos los contenedores 

            root@maqueta-infra-lamp:~# docker container ls -a
            CONTAINER ID        IMAGE               COMMAND             CREATED             STATUS                     PORTS               NAMES
            55febbb9a89c        linode/lamp         "/bin/bash"         9 minutes ago       Exited (0) 9 minutes ago                       c-infra-lamp
            root@maqueta-infra-lamp:~#

## D- Asi se entra al contenedor

            root@maqueta-infra-lamp:~# docker exec -it c-infra-lamp /bin/bash

## E- Exportar un docker (hacemos el backup)

            docker export c-infra-lamp > /mnt/Mega/Docker/Maqueta/c-infra-lamp-v.0.0.7-$(date +"%Y-%m-%d").tar

            ######################################################################
            ######################################################################
            Cuando docker importa importa la imagen del contenedor, a dicha imagen
            hay que declararle los tag que hacen referencia a que estas instalado
            ######################################################################
            ######################################################################

## Etapa 2

###################################################################### <br />

A- importamos la imagen del contenedor desde el disco local <br />
B- listamos las imagenes <br />
C- ejecutamos el contenedor en Background <br />
D- listamos los contenedores <br />
E- Ingresamos al contenedor <br />
#####################################################################

### A- Importamos un contenedor

         root@maqueta-infra-lamp:~# docker import ./c-infra-lamp-v.0.0.5-2018-06-09.tar c-infra-lamp:v.0.05
         sha256:333e913190cc80a83b42b6c5d0051db1e1248b8431658076a103d00617a5fd6e

### B- Listamos las imagenes

         root@maqueta-infra-lamp:~# docker image ls -a
         REPOSITORY            TAG                   IMAGE ID            CREATED             SIZE
         c-infra-lamp-v.0.04   v.0.04       333e913190cc        23 seconds ago      347MB
         root@maqueta-infra-lamp:~#
### C- Ejecutamos el contenedor importado

         docker run -p 443:443 --hostname c-infra-lamp --name=c-infra-lamp -itd c-infra-lamp:v.0.04 /bin/bash

### D- Listamos los contenedores

         root@maqueta-infra-lamp:~# docker container ls -a
         CONTAINER ID        IMAGE                 COMMAND             CREATED             STATUS              PORTS                  NAMES
         c34658721fb3        c-infra-lamp:v.0.04   "/bin/bash"         4 seconds ago       Up 3 seconds        0.0.0.0:443->443/tcp   c-infra-lamp
         root@maqueta-infra-lamp:~#

### E- Asi se entra al contenedor

         root@maqueta-infra-lamp:~# docker exec -it c-infra-lamp /bin/bash
         root@c-infra-lamp:/#

