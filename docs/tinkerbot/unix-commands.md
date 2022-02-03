- Rewriting DB with MONGO
- Check of Mongod running osx: `ps -ef | grep mongod | grep -v grep | wc -l | tr -d ' '`
- Install MongoDB on RPI Ubunut Server 64

```
sudo nano /etc/netplan/50-cloud-init.yaml
sudo netplan generate
sudo apt update
sudo apt upgrade

    # This file is generated from information provided by the datasource. Changes
    # to it will not persist across an instance reboot. To disable cloud-init's
    # network configuration capabilities, write a file
    # /etc/cloud/cloud.cfg.d/99-disable-network-config.cfg with the following:
    # network: {config: disabled}
    network:
        ethernets:
            eth0:
                dhcp4: true
                optional: true
        version: 2
        wifis:
            wlan0:
                dhcp4: true
                optional: true
                access-points:
                    "SSID_name":
                        password: "WiFi_password"

curl -s https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -

echo "deb [ arch=arm64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list

sudo apt update
sudo apt install mongodb-org

sudo systemctl enable mongod
sudo systemctl start mongod

sudo systemctl status mongod
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

- Format Drive: https://sh-tsang.medium.com/partitioning-formatting-and-mounting-a-hard-drive-in-linux-ubuntu-18-04-324b7634d1e0

- Check if disk is mounted: `mount | grep sda`
- Check external drive: `sudo lshw -C disk`

https://unix.stackexchange.com/questions/510046/how-do-i-find-which-disk-partition-current-directory-is-on
- Check which drive current directory is in: `df .`
- Change permission of drive: `chown <user> -r <mnt-dir>`
- Search for mongod.conf: `sudo find . -name "mongod.conf" -print`
- `sudo service mongod start`
- `sudo service mongod status`
```
  sudo service mongod stop
  sudo mv mongodb /new/disk/mongodb/
  sudo ln -s /new/disk/mongodb/ /var/lib/mongodb
  sudo chown mongodb:mongodb /new/disk/mongodb/
  sudo service mongod start

  # test if mongodb user can access new location:
  sudo -u mongodb -s cd /new/disk/mongodb/
  # resolve other permissions issues if necessary
  sudo usermod -a -G <newdisk_grp> mongodb
```

- Change mongoDB storage location: https://stackoverflow.com/questions/5961145/changing-mongodb-data-store-directory