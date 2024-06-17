"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5454],{37651:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=n(87462),i=(n(67294),n(3905));const l={sidebar_position:5,sidebar_label:"Harvester Configuration",title:"Harvester Configuration",keywords:["Harvester","harvester","Rancher","rancher","Harvester Configuration"],description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings."},o=void 0,r={unversionedId:"install/harvester-configuration",id:"version-v1.1/install/harvester-configuration",title:"Harvester Configuration",description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings.",source:"@site/versioned_docs/version-v1.1/install/harvester-configuration.md",sourceDirName:"install",slug:"/install/harvester-configuration",permalink:"/v1.1/install/harvester-configuration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/harvester-configuration.md",tags:[],version:"v1.1",lastUpdatedAt:1718611809,formattedLastUpdatedAt:"Jun 17, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester Configuration",title:"Harvester Configuration",keywords:["Harvester","harvester","Rancher","rancher","Harvester Configuration"],description:"Harvester configuration file can be provided during manual or automatic installation to configure various settings."},sidebar:"api",previous:{title:"PXE Boot Installation",permalink:"/v1.1/install/pxe-boot-install"},next:{title:"Update Harvester Configuration",permalink:"/v1.1/install/update-harvester-configuration"}},s={},d=[{value:"Configuration Example",id:"configuration-example",level:2},{value:"Configuration Reference",id:"configuration-reference",level:2},{value:"<code>scheme_version</code>",id:"scheme_version",level:3},{value:"Definition",id:"definition",level:4},{value:"<code>server_url</code>",id:"server_url",level:3},{value:"Definition",id:"definition-1",level:4},{value:"Example",id:"example",level:4},{value:"<code>token</code>",id:"token",level:3},{value:"Definition",id:"definition-2",level:4},{value:"Example",id:"example-1",level:4},{value:"<code>os.ssh_authorized_keys</code>",id:"osssh_authorized_keys",level:3},{value:"Definition",id:"definition-3",level:4},{value:"Example",id:"example-2",level:4},{value:"<code>os.write_files</code>",id:"oswrite_files",level:3},{value:"<code>os.hostname</code>",id:"oshostname",level:3},{value:"Definition",id:"definition-4",level:4},{value:"Example",id:"example-3",level:4},{value:"<code>os.modules</code>",id:"osmodules",level:3},{value:"Definition",id:"definition-5",level:4},{value:"Example",id:"example-4",level:4},{value:"<code>os.sysctls</code>",id:"ossysctls",level:3},{value:"Definition",id:"definition-6",level:4},{value:"Example",id:"example-5",level:4},{value:"<code>os.dns_nameservers</code>",id:"osdns_nameservers",level:3},{value:"Definition",id:"definition-7",level:4},{value:"Example",id:"example-6",level:4},{value:"<code>os.ntp_servers</code>",id:"osntp_servers",level:3},{value:"Definition",id:"definition-8",level:4},{value:"Example",id:"example-7",level:4},{value:"<code>os.password</code>",id:"ospassword",level:3},{value:"Definition",id:"definition-9",level:4},{value:"Example",id:"example-8",level:4},{value:"<code>os.environment</code>",id:"osenvironment",level:3},{value:"Definition",id:"definition-10",level:4},{value:"Example",id:"example-9",level:4},{value:"<code>os.labels</code>",id:"oslabels",level:3},{value:"Definition",id:"definition-11",level:4},{value:"Example",id:"example-10",level:4},{value:"<code>install.mode</code>",id:"installmode",level:3},{value:"Definition",id:"definition-12",level:4},{value:"Example",id:"example-11",level:4},{value:"<code>install.management_interface</code>",id:"installmanagement_interface",level:3},{value:"Definition",id:"definition-13",level:4},{value:"Example",id:"example-12",level:4},{value:"<code>install.force_efi</code>",id:"installforce_efi",level:3},{value:"<code>install.device</code>",id:"installdevice",level:3},{value:"<code>install.silent</code>",id:"installsilent",level:3},{value:"<code>install.iso_url</code>",id:"installiso_url",level:3},{value:"<code>install.poweroff</code>",id:"installpoweroff",level:3},{value:"<code>install.no_format</code>",id:"installno_format",level:3},{value:"<code>install.debug</code>",id:"installdebug",level:3},{value:"<code>install.tty</code>",id:"installtty",level:3},{value:"Definition",id:"definition-14",level:4},{value:"Example",id:"example-13",level:4},{value:"<code>install.vip</code>",id:"installvip",level:3},{value:"<code>install.vip_mode</code>",id:"installvip_mode",level:3},{value:"<code>install.vip_hw_addr</code>",id:"installvip_hw_addr",level:3},{value:"Definition",id:"definition-15",level:4},{value:"Example",id:"example-14",level:4},{value:"<code>install.force_mbr</code>",id:"installforce_mbr",level:3},{value:"Definition",id:"definition-16",level:4},{value:"Example",id:"example-15",level:4},{value:"<code>install.data_disk</code>",id:"installdata_disk",level:3},{value:"Definition",id:"definition-17",level:4},{value:"Example",id:"example-16",level:4},{value:"<code>system_settings</code>",id:"system_settings",level:3},{value:"Definition",id:"definition-18",level:4},{value:"Example",id:"example-17",level:4}],p={toc:d},m="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/harvester-configuration"})),(0,i.kt)("h2",{id:"configuration-example"},"Configuration Example"),(0,i.kt)("p",null,"Harvester configuration file can be provided during manual or automatic installation to configure various settings. The following is a configuration example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'scheme_version: 1\nserver_url: https://cluster-VIP:443\ntoken: TOKEN_VALUE\nos:\n  ssh_authorized_keys:\n    - ssh-rsa AAAAB3NzaC1yc2EAAAADAQAB...\n    - github:username\n  write_files:\n  - encoding: ""\n    content: test content\n    owner: root\n    path: /etc/test.txt\n    permissions: \'0755\'\n  hostname: myhost\n  modules:\n    - kvm\n    - nvme\n  sysctls:\n    kernel.printk: "4 4 1 7"\n    kernel.kptr_restrict: "1"\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n  ntp_servers:\n    - 0.suse.pool.ntp.org\n    - 1.suse.pool.ntp.org\n  password: rancher\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n  labels:\n    topology.kubernetes.io/zone: zone1\n    foo: bar\n    mylabel: myvalue\ninstall:\n  mode: create\n  management_interface:\n    interfaces:\n    - name: ens5\n      hwAddr: "B8:CA:3A:6A:64:7C"\n    method: dhcp\n  force_efi: true\n  device: /dev/sda\n  data_disk: /dev/sdb\n  silent: true\n  iso_url: http://myserver/test.iso\n  poweroff: true\n  no_format: true\n  debug: true\n  tty: ttyS0\n  vip: 10.10.0.19\n  vip_hw_addr: 52:54:00:ec:0e:0b\n  vip_mode: dhcp\n  force_mbr: false\nsystem_settings:\n  auto-disk-provision-paths: ""\n')),(0,i.kt)("h2",{id:"configuration-reference"},"Configuration Reference"),(0,i.kt)("p",null,"Below is a reference of all configuration keys."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Configuration Priority"),": When you provide a remote Harvester Configuration file during the install of Harvester, the Harvester Configuration file will not overwrite the values for the inputs you had previously filled out and selected.  Priority is given to the values that you input during the guided install.\nFor instance, if you have in your Harvester Configuration file specified ",(0,i.kt)("inlineCode",{parentName:"p"},"os.hostname")," and during install you fill in the field of ",(0,i.kt)("inlineCode",{parentName:"p"},"hostname")," when prompted, the value that you filled in will take priority over your Harvester Configuration's ",(0,i.kt)("inlineCode",{parentName:"p"},"os.hostname"),".")),(0,i.kt)("h3",{id:"scheme_version"},(0,i.kt)("inlineCode",{parentName:"h3"},"scheme_version")),(0,i.kt)("h4",{id:"definition"},"Definition"),(0,i.kt)("p",null,"The version of scheme reserved for future configuration migration."),(0,i.kt)("p",null,"This configuration is mandatory for migrating the configuration to a new scheme version. It tells Harvester the previous version and the need to migrate."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This field didn't take any effect in the current Harvester version.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure that your custom configuration always has the correct scheme version.")),(0,i.kt)("h3",{id:"server_url"},(0,i.kt)("inlineCode",{parentName:"h3"},"server_url")),(0,i.kt)("h4",{id:"definition-1"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"server_url")," is the URL of the Harvester cluster, which is used for the new ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," to join the cluster."),(0,i.kt)("p",null,"This configuration is mandatory when the installation is in ",(0,i.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. The default format of ",(0,i.kt)("inlineCode",{parentName:"p"},"server_url")," is ",(0,i.kt)("inlineCode",{parentName:"p"},"https://cluster-VIP:443"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"To ensure a high availability (HA) Harvester cluster, please use either the Harvester cluster ",(0,i.kt)("a",{parentName:"p",href:"#installvip"},"VIP")," or a domain name in ",(0,i.kt)("inlineCode",{parentName:"p"},"server_url"),".")),(0,i.kt)("h4",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"server_url: https://cluster-VIP:443\ninstall:\n  mode: join\n")),(0,i.kt)("h3",{id:"token"},(0,i.kt)("inlineCode",{parentName:"h3"},"token")),(0,i.kt)("h4",{id:"definition-2"},"Definition"),(0,i.kt)("p",null,"The cluster secret or node token. If the value matches the format of a node token it will\nautomatically be assumed to be a node token. Otherwise it is treated as a cluster secret."),(0,i.kt)("p",null,"In order for a new node to join the Harvester cluster, the token should match what the server has."),(0,i.kt)("h4",{id:"example-1"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"token: myclustersecret\n")),(0,i.kt)("p",null,"Or a node token"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'token: "K1074ec55daebdf54ef48294b0ddf0ce1c3cb64ee7e3d0b9ec79fbc7baf1f7ddac6::node:77689533d0140c7019416603a05275d4"\n')),(0,i.kt)("h3",{id:"osssh_authorized_keys"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.ssh_authorized_keys")),(0,i.kt)("h4",{id:"definition-3"},"Definition"),(0,i.kt)("p",null,"A list of SSH authorized keys that should be added to the default user, ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher"),". SSH keys can be obtained from GitHub user accounts by using the format\n",(0,i.kt)("inlineCode",{parentName:"p"},"github:${USERNAME}"),". This is done by downloading the keys from ",(0,i.kt)("inlineCode",{parentName:"p"},"https://github.com/${USERNAME}.keys"),"."),(0,i.kt)("h4",{id:"example-2"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  ssh_authorized_keys:\n    - "ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC2TBZGjE+J8ag11dzkFT58J3XPONrDVmalCNrKxsfADfyy0eqdZrG8hcAxAR/5zuj90Gin2uBR4Sw6Cn4VHsPZcFpXyQCjK1QDADj+WcuhpXOIOY3AB0LZBly9NI0ll+8lo3QtEaoyRLtrMBhQ6Mooy2M3MTG4JNwU9o3yInuqZWf9PvtW6KxMl+ygg1xZkljhemGZ9k0wSrjqif+8usNbzVlCOVQmZwZA+BZxbdcLNwkg7zWJSXzDIXyqM6iWPGXQDEbWLq3+HR1qKucTCSxjbqoe0FD5xcW7NHIME5XKX84yH92n6yn+rxSsyUfhJWYqJd+i0fKf5UbN6qLrtd/D"\n    - "github:ibuildthecloud"\n')),(0,i.kt)("h3",{id:"oswrite_files"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.write_files")),(0,i.kt)("p",null,"A list of files to write to disk on boot. The ",(0,i.kt)("inlineCode",{parentName:"p"},"encoding")," field specifies the content's encoding. Valid ",(0,i.kt)("inlineCode",{parentName:"p"},"encoding")," values are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'""'),": content data are written in plain text. In this case, the ",(0,i.kt)("inlineCode",{parentName:"li"},"encoding")," field can be also omitted."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"b64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"base64"),": content data are base64-encoded."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gz"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip"),": content data are gzip-compressed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gz+base64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip+base64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gz+b64"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"gzip+b64"),": content data are gzip-compressed first and then base64-encoded.")),(0,i.kt)("p",null,"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  write_files:\n  - encoding: b64\n    content: CiMgVGhpcyBmaWxlIGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiBTRUxpbnV4...\n    owner: root:root\n    path: /etc/connman/main.conf\n    permissions: '0644'\n  - content: |\n      # My new /etc/sysconfig/samba file\n\n      SMDBOPTIONS=\"-D\"\n    path: /etc/sysconfig/samba\n  - content: !!binary |\n      f0VMRgIBAQAAAAAAAAAAAAIAPgABAAAAwARAAAAAAABAAAAAAAAAAJAVAAAAAA\n      AEAAHgAdAAYAAAAFAAAAQAAAAAAAAABAAEAAAAAAAEAAQAAAAAAAwAEAAAAAAA\n      AAAAAAAAAwAAAAQAAAAAAgAAAAAAAAACQAAAAAAAAAJAAAAAAAAcAAAAAAAAAB\n      ...\n    path: /bin/arch\n    permissions: '0555'\n  - content: |\n      15 * * * * root ship_logs\n    path: /etc/crontab\n")),(0,i.kt)("h3",{id:"oshostname"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.hostname")),(0,i.kt)("h4",{id:"definition-4"},"Definition"),(0,i.kt)("p",null,"Set the system hostname. The installer will generate a random hostname if the user doesn't provide a value."),(0,i.kt)("h4",{id:"example-3"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  hostname: myhostname\n")),(0,i.kt)("h3",{id:"osmodules"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.modules")),(0,i.kt)("h4",{id:"definition-5"},"Definition"),(0,i.kt)("p",null,"A list of kernel modules to be loaded on start."),(0,i.kt)("h4",{id:"example-4"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  modules:\n    - kvm\n    - nvme\n")),(0,i.kt)("h3",{id:"ossysctls"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.sysctls")),(0,i.kt)("h4",{id:"definition-6"},"Definition"),(0,i.kt)("p",null,"Kernel sysctl to set up on start. These are the typical configurations found in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/sysctl.conf"),".\nValues must be specified as strings."),(0,i.kt)("h4",{id:"example-5"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  sysctls:\n    kernel.printk: 4 4 1 7 # the YAML parser will read as a string\n    kernel.kptr_restrict: "1" # force the YAML parser to read as a string\n')),(0,i.kt)("h3",{id:"osdns_nameservers"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.dns_nameservers")),(0,i.kt)("h4",{id:"definition-7"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fallback")," DNS name servers to use if DNS is not configured by DHCP or in the OS."),(0,i.kt)("h4",{id:"example-6"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  dns_nameservers:\n    - 8.8.8.8\n    - 1.1.1.1\n")),(0,i.kt)("h3",{id:"osntp_servers"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.ntp_servers")),(0,i.kt)("h4",{id:"definition-8"},"Definition"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Fallback")," ntp servers to use if NTP is not configured elsewhere in the OS. Highly recommend to configure ",(0,i.kt)("inlineCode",{parentName:"p"},"os.ntp_servers")," to avoid time synchronization issue between machines."),(0,i.kt)("h4",{id:"example-7"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  ntp_servers:\n    - 0.suse.pool.ntp.org\n    - 1.suse.pool.ntp.org\n")),(0,i.kt)("h3",{id:"ospassword"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.password")),(0,i.kt)("h4",{id:"definition-9"},"Definition"),(0,i.kt)("p",null,"The password for the default user, ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher"),". By default, there is no password for the ",(0,i.kt)("inlineCode",{parentName:"p"},"rancher")," user.\nIf you set a password at runtime it will be reset on the next boot. The\nvalue of the password can be clear text or an encrypted form. The easiest way to get this encrypted\nform is to change your password on a Linux system and copy the value of the second field from\n",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/shadow"),". You can also encrypt a password using OpenSSL. For the encryption algorithms\nsupported by Harvester, please refer to the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Algorithm"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Command"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Support"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SHA-512"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"openssl passwd -6")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"SHA-256"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"openssl passwd -5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes (started from v1.1.2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MD5"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"openssl passwd -1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes (started from v1.1.2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"MD5, Apache variant"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"openssl passwd -apr1")),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes (started from v1.1.2)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"AIX-MD5"),(0,i.kt)("td",{parentName:"tr",align:"center"},(0,i.kt)("inlineCode",{parentName:"td"},"openssl passwd -aixmd5")),(0,i.kt)("td",{parentName:"tr",align:"center"},"No")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"  Only SHA-512 is supported before v1.1.2 release.")),(0,i.kt)("h4",{id:"example-8"},"Example"),(0,i.kt)("p",null,"Encrypted:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'os:\n  password: "$6$kZYUnRaTxNdg4W8H$WSEJydGWsNpaRbbbRdTDLJ2hDLbkizxSFGW2RtexlqG6njEATaGQG9ssztjaKDCsaNUPBZ1E1YdsvSLMAi/IO/"\n')),(0,i.kt)("p",null,"Or clear text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  password: supersecure\n")),(0,i.kt)("h3",{id:"osenvironment"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.environment")),(0,i.kt)("h4",{id:"definition-10"},"Definition"),(0,i.kt)("p",null,"Environment variables to be set on K3s and other processes like the boot process.\nPrimary use of this field is to set the HTTP proxy."),(0,i.kt)("h4",{id:"example-9"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  environment:\n    http_proxy: http://myserver\n    https_proxy: http://myserver\n")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This example sets the HTTP(S) proxy for ",(0,i.kt)("strong",{parentName:"p"},"foundational OS components"),".\nTo set up an HTTP(S) proxy for Harvester components such as fetching external images and backup to S3 services,\nsee ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/advanced/index#http-proxy"},"Settings/http-proxy"),".")),(0,i.kt)("h3",{id:"oslabels"},(0,i.kt)("inlineCode",{parentName:"h3"},"os.labels")),(0,i.kt)("h4",{id:"definition-11"},"Definition"),(0,i.kt)("p",null,"Labels to be added to this Node."),(0,i.kt)("h4",{id:"example-10"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"os:\n  labels:\n    topology.kubernetes.io/zone: zone1\n    foo: bar\n    mylabel: myvalue\n")),(0,i.kt)("h3",{id:"installmode"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.mode")),(0,i.kt)("h4",{id:"definition-12"},"Definition"),(0,i.kt)("p",null,"Harvester installation mode:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"create"),": Creating a new Harvester installation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"join"),": Join an existing Harvester installation. Need to specify ",(0,i.kt)("inlineCode",{parentName:"li"},"server_url"),".")),(0,i.kt)("h4",{id:"example-11"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  mode: create\n")),(0,i.kt)("h3",{id:"installmanagement_interface"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.management_interface")),(0,i.kt)("h4",{id:"definition-13"},"Definition"),(0,i.kt)("p",null,"Configure network interfaces for the host machine. Valid configuration fields are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"method"),": Method to assign an IP to this network. The following are supported:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static"),": Manually assign an IP and gateway."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dhcp"),": Request an IP from the DHCP server."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ip"),": Static IP for this network. Required if ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"subnet_mask"),": Subnet mask for this network. Required if ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gateway"),": Gateway for this network. Required if ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," method is chosen."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interfaces"),": An array of interface names. If provided, the installer then combines these NICs into a single logical bonded interface.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interfaces.name"),": The name of the slave interface for the bonded network."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"interfaces.hwAddr"),": The hardware MAC address of the interface."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bond_options"),": Options for bonded interfaces. Refer to ",(0,i.kt)("a",{parentName:"li",href:"https://www.kernel.org/doc/Documentation/networking/bonding.txt"},"here")," for more info. If not provided, the following options would be used:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mode: balance-tlb")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"miimon: 100")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mtu"),": The MTU for the interface."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"vlan_id"),": The VLAN ID for the interface.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Harvester uses the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.net-naming-scheme.html"},"systemd net naming scheme"),".\nPlease make sure the interface name is present on the target machine before installation.")),(0,i.kt)("h4",{id:"example-12"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'install:\n  mode: create\n  management_interface:\n    interfaces:\n    - name: ens5\n      hwAddr: "B8:CA:3A:6A:64:7D"     # The hwAddr is optional\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n    mtu: 1492\n    vlan_id: 101\n')),(0,i.kt)("h3",{id:"installforce_efi"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.force_efi")),(0,i.kt)("p",null,"Force EFI installation even when EFI is not detected. Default: ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"installdevice"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.device")),(0,i.kt)("p",null,"The device to install the OS."),(0,i.kt)("p",null,"Prefer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/disk/by-id/$id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/disk/by-path/$path")," to specify the storage device if your machine contains multiple physical volumes via pxe installation."),(0,i.kt)("h3",{id:"installsilent"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.silent")),(0,i.kt)("p",null,"Reserved."),(0,i.kt)("h3",{id:"installiso_url"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.iso_url")),(0,i.kt)("p",null,"ISO to download and install from if booting from kernel/vmlinuz and not ISO."),(0,i.kt)("h3",{id:"installpoweroff"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.poweroff")),(0,i.kt)("p",null,"Shutdown the machine after installation instead of rebooting"),(0,i.kt)("h3",{id:"installno_format"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.no_format")),(0,i.kt)("p",null,"Do not partition and format, assume layout exists already."),(0,i.kt)("h3",{id:"installdebug"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.debug")),(0,i.kt)("p",null,"Run the installation with additional logging and debugging enabled for the installed system."),(0,i.kt)("h3",{id:"installtty"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.tty")),(0,i.kt)("h4",{id:"definition-14"},"Definition"),(0,i.kt)("p",null,"The tty device used for the console."),(0,i.kt)("h4",{id:"example-13"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  tty: ttyS0,115200n8\n")),(0,i.kt)("h3",{id:"installvip"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.vip")),(0,i.kt)("h3",{id:"installvip_mode"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.vip_mode")),(0,i.kt)("h3",{id:"installvip_hw_addr"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.vip_hw_addr")),(0,i.kt)("h4",{id:"definition-15"},"Definition"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"install.vip"),": The VIP of the Harvester management endpoint. After installation, users can access the Harvester GUI at the URL ",(0,i.kt)("inlineCode",{parentName:"li"},"https://<VIP>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"install.vip_mode"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dhcp"),": Harvester will send DHCP requests to get the VIP. The ",(0,i.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr")," field needs to be provided."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"static"),": Harvester uses a static VIP."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"install.vip_hw_addr"),": The hardware address corresponding to the VIP. Users must configure their on-premise DHCP server to offer the configured VIP. The field is mandatory when ",(0,i.kt)("inlineCode",{parentName:"li"},"install.vip_mode")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"dhcp"),".")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/install/management-address"},"Management Address")," for more information."),(0,i.kt)("h4",{id:"example-14"},"Example"),(0,i.kt)("p",null,"Configure a static VIP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 192.168.0.100\n  vip_mode: static\n")),(0,i.kt)("p",null,"Configure a DHCP VIP."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  vip: 10.10.0.19\n  vip_mode: dhcp\n  vip_hw_addr: 52:54:00:ec:0e:0b\n")),(0,i.kt)("h3",{id:"installforce_mbr"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.force_mbr")),(0,i.kt)("h4",{id:"definition-16"},"Definition"),(0,i.kt)("p",null,"By default, Harvester uses GPT partitioning scheme on both UEFI and BIOS systems.\nHowever, if you face compatibility issues, the MBR partitioning scheme can be forced on BIOS systems."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Harvester creates an additional partition for storing VM data if\n",(0,i.kt)("a",{parentName:"p",href:"#installdata_disk"},(0,i.kt)("inlineCode",{parentName:"a"},"install.data_disk"))," is configured to use the same\nstorage device as the one set for ",(0,i.kt)("a",{parentName:"p",href:"#installdevice"},(0,i.kt)("inlineCode",{parentName:"a"},"install.device")),".\nWhen force using MBR, no additional partition will be created and VM data will be stored in a partition shared with the OS data.")),(0,i.kt)("h4",{id:"example-15"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  force_mbr: true\n")),(0,i.kt)("h3",{id:"installdata_disk"},(0,i.kt)("inlineCode",{parentName:"h3"},"install.data_disk")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,i.kt)("h4",{id:"definition-17"},"Definition"),(0,i.kt)("p",null,"Sets the default storage device to store the VM data."),(0,i.kt)("p",null,"Prefer to use ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/disk/by-id/$id")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/disk/by-path/$path")," to specify the storage device if your machine contains multiple physical volumes via pxe installation."),(0,i.kt)("p",null,"Default: Same storage device as the one set for ",(0,i.kt)("a",{parentName:"p",href:"#installdevice"},(0,i.kt)("inlineCode",{parentName:"a"},"install.device"))),(0,i.kt)("h4",{id:"example-16"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"install:\n  data_disk: /dev/sdb\n")),(0,i.kt)("h3",{id:"system_settings"},(0,i.kt)("inlineCode",{parentName:"h3"},"system_settings")),(0,i.kt)("h4",{id:"definition-18"},"Definition"),(0,i.kt)("p",null,"You can overwrite the default Harvester system settings by configuring ",(0,i.kt)("inlineCode",{parentName:"p"},"system_settings"),".\nSee the ",(0,i.kt)("a",{parentName:"p",href:"/v1.1/advanced/index"},"Settings")," page for additional information and the list of all the options."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},'Overwriting system settings only works when Harvester is installed in "create" mode.\nIf you install Harvester in "join" mode, this setting is ignored.\nInstalling in "join" mode will adopt the system settings from the existing Harvester system.')),(0,i.kt)("h4",{id:"example-17"},"Example"),(0,i.kt)("p",null,"The example below overwrites ",(0,i.kt)("inlineCode",{parentName:"p"},"containerd-registry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"http-proxy")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ui-source")," settings. The values must be a ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'system_settings:\n  containerd-registry: \'{"Mirrors": {"docker.io": {"Endpoints": ["https://myregistry.local:5000"]}}, "Configs": {"myregistry.local:5000": {"Auth": {"Username": "testuser", "Password": "testpassword"}, "TLS": {"InsecureSkipVerify": false}}}}\'\n  http-proxy: \'{"httpProxy": "http://my.proxy", "httpsProxy": "https://my.proxy", "noProxy": "some.internal.svc"}\'\n  ui-source: auto\n')))}u.isMDXComponent=!0}}]);