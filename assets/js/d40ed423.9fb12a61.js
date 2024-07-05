"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[10060],{28852:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});n(67294);var r=n(3905);const a={sidebar_position:4,sidebar_label:"PXE Boot Installation",title:"PXE Boot Installation",keywords:["Harvester","harvester","Rancher","rancher","Install Harvester","Installing Harvester","Harvester Installation","PXE Boot Install"],description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."},i=void 0,o={unversionedId:"install/pxe-boot-install",id:"version-v1.0/install/pxe-boot-install",title:"PXE Boot Installation",description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot.",source:"@site/versioned_docs/version-v1.0/install/pxe-boot-install.md",sourceDirName:"install",slug:"/install/pxe-boot-install",permalink:"/v1.0/install/pxe-boot-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/pxe-boot-install.md",tags:[],version:"v1.0",lastUpdatedAt:1720145056,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"PXE Boot Installation",title:"PXE Boot Installation",keywords:["Harvester","harvester","Rancher","rancher","Install Harvester","Installing Harvester","Harvester Installation","PXE Boot Install"],description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."},sidebar:"api",previous:{title:"USB Installation",permalink:"/v1.0/install/usb-install"},next:{title:"Harvester Configuration",permalink:"/v1.0/install/harvester-configuration"}},s={},l=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Preparing HTTP Servers",id:"preparing-http-servers",level:2},{value:"Preparing Boot Files",id:"preparing-boot-files",level:2},{value:"Preparing iPXE Boot Scripts",id:"preparing-ipxe-boot-scripts",level:2},{value:"CREATE Mode",id:"create-mode",level:3},{value:"JOIN Mode",id:"join-mode",level:3},{value:"DHCP Server Configuration",id:"dhcp-server-configuration",level:2},{value:"Harvester Configuration",id:"harvester-configuration",level:2},{value:"UEFI HTTP Boot support",id:"uefi-http-boot-support",level:2},{value:"Serve the iPXE Program",id:"serve-the-ipxe-program",level:3},{value:"DHCP Server Configuration",id:"dhcp-server-configuration-1",level:3},{value:"The iPXE Script for UEFI Boot",id:"the-ipxe-script-for-uefi-boot",level:3},{value:"Useful Kernel Parameters",id:"useful-kernel-parameters",level:2},{value:"<code>ip=dhcp</code>",id:"ipdhcp",level:3},{value:"<code>rd.net.dhcp.retry=&lt;cnt&gt;</code>",id:"rdnetdhcpretrycnt",level:3}],p={toc:l},d="wrapper";function h({components:e,...t}){return(0,r.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/pxe-boot-install"})),(0,r.kt)("p",null,"Starting from version ",(0,r.kt)("inlineCode",{parentName:"p"},"0.2.0"),", Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."),(0,r.kt)("p",null,"We recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://ipxe.org/"},"iPXE")," to perform the network boot. It has more features than the traditional PXE Boot program and is likely available in modern NIC cards. If the iPXE firmware is not available for your NIC card, the iPXE firmware images can be loaded from the TFTP server first."),(0,r.kt)("p",null,"To see sample iPXE scripts, please visit ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples/tree/v1.0"},"Harvester iPXE Examples"),"."),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Nodes need to have at least ",(0,r.kt)("strong",{parentName:"p"},"8G")," of RAM because the installer loads the full ISO file into tmpfs.")),(0,r.kt)("h2",{id:"preparing-http-servers"},"Preparing HTTP Servers"),(0,r.kt)("p",null,"An HTTP server is required to serve boot files.\nLet's assume the NGINX HTTP server's IP is ",(0,r.kt)("inlineCode",{parentName:"p"},"10.100.0.10"),", and it serves the ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/")," directory with the path ",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/"),"."),(0,r.kt)("h2",{id:"preparing-boot-files"},"Preparing Boot Files"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the required files from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester releases page"),"."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The ISO: ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-<version>-amd64.iso")),(0,r.kt)("li",{parentName:"ul"},"The kernel: ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-<version>-vmlinuz-amd64")),(0,r.kt)("li",{parentName:"ul"},"The initrd: ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-<version>-initrd-amd64")),(0,r.kt)("li",{parentName:"ul"},"The rootfs squashfs image: ",(0,r.kt)("inlineCode",{parentName:"li"},"harvester-<version>-rootfs-amd64.squashfs")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Serve the files."),(0,r.kt)("p",{parentName:"li"},"  Copy or move the downloaded files to an appropriate location so they can be downloaded via the HTTP server. For example:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo mkdir -p /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-amd64.iso /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-vmlinuz-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-initrd-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-rootfs-amd64.squashfs /usr/share/nginx/html/harvester/\n")))),(0,r.kt)("h2",{id:"preparing-ipxe-boot-scripts"},"Preparing iPXE Boot Scripts"),(0,r.kt)("p",null,"When performing an automatic installation, there are two modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CREATE"),": we are installing a node to construct an initial Harvester cluster."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"JOIN"),": we are installing a node to join an existing Harvester cluster.")),(0,r.kt)("h3",{id:"create-mode"},"CREATE Mode"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration file")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"config-create.yaml")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," mode. Modify the values as needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},"# cat /usr/share/nginx/html/harvester/config-create.yaml\ntoken: token\nos:\n  hostname: node1\n  ssh_authorized_keys:\n  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDbeUa9A7Kee+hcCleIXYxuaPksn2m4PZTd4T7wPcse8KbsQfttGRax6vxQXoPO6ehddqOb2nV7tkW2mEhR50OE7W7ngDHbzK2OneAyONYF44bmMsapNAGvnsBKe9rNrev1iVBwOjtmyVLhnLrJIX+2+3T3yauxdu+pmBsnD5OIKUrBrN1sdwW0rA2rHDiSnzXHNQM3m02aY6mlagdQ/Ovh96h05QFCHYxBc6oE/mIeFRaNifa4GU/oELn3a6HfbETeBQz+XOEN+IrLpnZO9riGyzsZroB/Y3Ju+cJxH06U0B7xwJCRmWZjuvfFQUP7RIJD1gRGZzmf3h8+F+oidkO2i5rbT57NaYSqkdVvR6RidVLWEzURZIGbtHjSPCi4kqD05ua8r/7CC0PvxQb1O5ILEdyJr2ZmzhF6VjjgmyrmSmt/yRq8MQtGQxyKXZhJqlPYho4d5SrHi5iGT2PvgDQaWch0I3ndEicaaPDZJHWBxVsCVAe44Wtj9g3LzXkyu3k= root@admin\n  password: rancher\n  ntp_servers:\n  - 0.suse.pool.ntp.org\n  - 1.suse.pool.ntp.org\ninstall:\n  mode: create\n  networks:\n    harvester-mgmt:       # (Mandatory) The management bond name.\n      interfaces:\n      - name: ens5\n      method: dhcp\n      bond_options:\n        mode: balance-tlb\n        miimon: 100\n    harvester-vlan:       # (Optional) The VLAN network bond name. If VLAN NIC names vary from\n      interfaces:         # host to host, consider creating a bonding device. Users can then select\n      - name: ens6        # `harvester-vlan` as the VLAN network NIC in the Harvester GUI.\n      method: none\n      bond_options:\n        mode: balance-tlb\n        miimon: 100\n  device: /dev/sda\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n  vip: 10.100.0.99        # The VIP to access the Harvester GUI. Make sure the IP is free to use.\n  vip_mode: static        # Or dhcp, check configuration file for more information.\n")),(0,r.kt)("p",null,"For machines that needs to be installed using ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,r.kt)("p",null,"This assumes the iPXE script is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-create"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you have multiple network interfaces, you can leverage dracut's ",(0,r.kt)("inlineCode",{parentName:"p"},"ip=")," parameter to specify the booting interface and any other network configurations that dracut supports (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"ip=eth1:dhcp"),").\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},(0,r.kt)("inlineCode",{parentName:"a"},"man dracut.cmdline"))," for more information."),(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"ip=")," parameter to designate the booting interface only, as we only support ",(0,r.kt)("strong",{parentName:"p"},"one single ",(0,r.kt)("inlineCode",{parentName:"strong"},"ip=")," parameter"),".")),(0,r.kt)("h3",{id:"join-mode"},"JOIN Mode"),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration file")," called ",(0,r.kt)("inlineCode",{parentName:"p"},"config-join.yaml")," for ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. Modify the values as needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-YAML"},'# cat /usr/share/nginx/html/harvester/config-join.yaml\nserver_url: https://10.100.0.99:443  # Should be the VIP set up in "CREATE" config\ntoken: token\nos:\n  hostname: node2\n  ssh_authorized_keys:\n  - ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDbeUa9A7Kee+hcCleIXYxuaPksn2m4PZTd4T7wPcse8KbsQfttGRax6vxQXoPO6ehddqOb2nV7tkW2mEhR50OE7W7ngDHbzK2OneAyONYF44bmMsapNAGvnsBKe9rNrev1iVBwOjtmyVLhnLrJIX+2+3T3yauxdu+pmBsnD5OIKUrBrN1sdwW0rA2rHDiSnzXHNQM3m02aY6mlagdQ/Ovh96h05QFCHYxBc6oE/mIeFRaNifa4GU/oELn3a6HfbETeBQz+XOEN+IrLpnZO9riGyzsZroB/Y3Ju+cJxH06U0B7xwJCRmWZjuvfFQUP7RIJD1gRGZzmf3h8+F+oidkO2i5rbT57NaYSqkdVvR6RidVLWEzURZIGbtHjSPCi4kqD05ua8r/7CC0PvxQb1O5ILEdyJr2ZmzhF6VjjgmyrmSmt/yRq8MQtGQxyKXZhJqlPYho4d5SrHi5iGT2PvgDQaWch0I3ndEicaaPDZJHWBxVsCVAe44Wtj9g3LzXkyu3k= root@admin\n  dns_nameservers:\n  - 1.1.1.1\n  - 8.8.8.8\n  password: rancher\ninstall:\n  mode: join\n  networks:\n    harvester-mgmt:       # (Mandatory) The management bond name.\n      interfaces:\n      - name: ens5\n      method: dhcp\n      bond_options:\n        mode: balance-tlb\n        miimon: 10\n    harvester-vlan:       # (Optional) The VLAN network bond name. If VLAN NIC names vary from\n      interfaces:         # host to host, consider creating a bonding device. Users can then select\n      - name: ens6        # `harvester-vlan` as the VLAN network NIC in the Harvester GUI.\n      method: none\n      bond_options:\n        mode: balance-tlb\n        miimon: 100\n  device: /dev/sda\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n')),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"mode")," is ",(0,r.kt)("inlineCode",{parentName:"p"},"join")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"server_url")," needs to be provided."),(0,r.kt)("p",null,"For machines that needs to be installed in ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-join.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,r.kt)("p",null,"This assumes the iPXE script is stored in ",(0,r.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-join"),"."),(0,r.kt)("h2",{id:"dhcp-server-configuration"},"DHCP Server Configuration"),(0,r.kt)("p",null,"The following is an example of how to configure the ISC DHCP server to offer iPXE scripts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'option architecture-type code 93 = unsigned integer 16;\n\nsubnet 10.100.0.0 netmask 255.255.255.0 {\n    option routers 10.100.0.10;\n        option domain-name-servers 192.168.2.1;\n    range 10.100.0.100 10.100.0.253;\n}\n\ngroup {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n\n\ngroup {\n  # join group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-join-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-join";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node2 { hardware ethernet 52:54:00:69:d5:92; }\n}\n')),(0,r.kt)("p",null,"The config file declares a subnet and two groups. The first group is for hosts to boot using ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," mode and the other one is for ",(0,r.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. By default, the iPXE path is chosen, but if it sees a PXE client it offers the iPXE image according to the client architecture. Please prepare those images and a TFTP server first."),(0,r.kt)("h2",{id:"harvester-configuration"},"Harvester Configuration"),(0,r.kt)("p",null,"For more information about Harvester configuration, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/harvester-configuration"},"Harvester configuration")," page."),(0,r.kt)("p",null,"Users can also provide configuration via kernel parameters. For example, to specify the ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," install mode, users can pass the ",(0,r.kt)("inlineCode",{parentName:"p"},"harvester.install.mode=create")," kernel parameter when booting. Values passed through kernel parameters have higher priority than values specified in the config file."),(0,r.kt)("h2",{id:"uefi-http-boot-support"},"UEFI HTTP Boot support"),(0,r.kt)("p",null,"UEFI firmware supports loading a boot image from an HTTP server. This section demonstrates how to use UEFI HTTP boot to load the iPXE program and perform an automatic installation."),(0,r.kt)("h3",{id:"serve-the-ipxe-program"},"Serve the iPXE Program"),(0,r.kt)("p",null,"Download the iPXE UEFI program from ",(0,r.kt)("a",{parentName:"p",href:"http://boot.ipxe.org/ipxe.efi"},"http://boot.ipxe.org/ipxe.efi")," and make sure ",(0,r.kt)("inlineCode",{parentName:"p"},"ipxe.efi")," can be downloaded from the HTTP server. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/share/nginx/html/harvester/\nwget http://boot.ipxe.org/ipxe.efi\n")),(0,r.kt)("p",null,"The file now can be downloaded from ",(0,r.kt)("a",{parentName:"p",href:"http://10.100.0.10/harvester/ipxe.efi"},"http://10.100.0.10/harvester/ipxe.efi")," locally."),(0,r.kt)("h3",{id:"dhcp-server-configuration-1"},"DHCP Server Configuration"),(0,r.kt)("p",null,"If the user plans to use the UEFI HTTP boot feature by getting a dynamic IP first, the DHCP server needs to provide the iPXE program URL when it sees such a request. The following is an updated ISC DHCP server group example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},'group {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } elsif substring (option vendor-class-identifier, 0, 10) = "HTTPClient" {\n    # UEFI HTTP Boot\n    option vendor-class-identifier "HTTPClient";\n    filename "http://10.100.0.10/harvester/ipxe.efi";\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"elsif substring")," statement is new, and it offers ",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe.efi")," when it sees a UEFI HTTP boot DHCP request. After the client fetches the iPXE program and runs it, the iPXE program will send a DHCP request again and load the iPXE script from the URL ",(0,r.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe-create-efi"),"."),(0,r.kt)("h3",{id:"the-ipxe-script-for-uefi-boot"},"The iPXE Script for UEFI Boot"),(0,r.kt)("p",null,"It's mandatory to specify the initrd image for UEFI boot in the kernel parameters. The following is an updated version of iPXE script for ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE")," mode."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz initrd=harvester-<version>-initrd ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,r.kt)("p",null,"The parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"initrd=harvester-<version>-initrd")," is required."),(0,r.kt)("h2",{id:"useful-kernel-parameters"},"Useful Kernel Parameters"),(0,r.kt)("p",null,"Besides the Harvester configuration, you can also specify other kernel parameters that are useful in different scenarios.\nSee also ",(0,r.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},"dracut.cmdline(7)"),"."),(0,r.kt)("h3",{id:"ipdhcp"},(0,r.kt)("inlineCode",{parentName:"h3"},"ip=dhcp")),(0,r.kt)("p",null,"If you have multiple network interfaces, you could add the ",(0,r.kt)("inlineCode",{parentName:"p"},"ip=dhcp")," parameter to get IP from the DHCP server from all interfaces."),(0,r.kt)("h3",{id:"rdnetdhcpretrycnt"},(0,r.kt)("inlineCode",{parentName:"h3"},"rd.net.dhcp.retry=<cnt>")),(0,r.kt)("p",null,"Failing to get IP from the DHCP server would cause iPXE booting to fail. You can add parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"rd.net.dhcp.retry=<cnt>"),"\nto retry DHCP request for ",(0,r.kt)("inlineCode",{parentName:"p"},"<cnt>")," times."))}h.isMDXComponent=!0}}]);