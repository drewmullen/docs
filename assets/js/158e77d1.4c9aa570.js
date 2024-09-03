"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[54438],{78686:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>l});n(67294);var o=n(3905);const a={sidebar_position:3,sidebar_label:"Operating System",title:"Operating System"},r=void 0,i={unversionedId:"troubleshooting/os",id:"version-v1.1/troubleshooting/os",title:"Operating System",description:"Harvester runs on an OpenSUSE-based OS. The OS is an artifact produced by the cOS toolkit. The following sections contain information and tips to help users troubleshoot OS-related issues.",source:"@site/versioned_docs/version-v1.1/troubleshooting/os.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/os",permalink:"/v1.1/troubleshooting/os",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/os.md",tags:[],version:"v1.1",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Operating System",title:"Operating System"},sidebar:"api",previous:{title:"Harvester",permalink:"/v1.1/troubleshooting/harvester"},next:{title:"Monitoring",permalink:"/v1.1/troubleshooting/monitoring"}},s={},l=[{value:"How to log into a Harvester node",id:"how-to-log-into-a-harvester-node",level:2},{value:"How can I install packages? Why are some paths read-only?",id:"how-can-i-install-packages-why-are-some-paths-read-only",level:2},{value:"How to permanently edit kernel parameters",id:"how-to-permanently-edit-kernel-parameters",level:2},{value:"How to change the default GRUB boot menu entry",id:"how-to-change-the-default-grub-boot-menu-entry",level:2},{value:"How to debug a system crash or hang",id:"how-to-debug-a-system-crash-or-hang",level:2},{value:"Collect crash log",id:"collect-crash-log",level:3},{value:"Collect crash dumps",id:"collect-crash-dumps",level:3}],p={toc:l},d="wrapper";function m({components:e,...t}){return(0,o.kt)(d,{...p,...t,components:e,mdxType:"MDXLayout"},(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/os"})),(0,o.kt)("p",null,"Harvester runs on an OpenSUSE-based OS. The OS is an artifact produced by the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rancher-sandbox/cOS-toolkit"},"cOS toolkit"),". The following sections contain information and tips to help users troubleshoot OS-related issues."),(0,o.kt)("h2",{id:"how-to-log-into-a-harvester-node"},"How to log into a Harvester node"),(0,o.kt)("p",null,"Users can log into a Harvester node with the username ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher")," and the password or SSH keypair provided during installation.\nThe user ",(0,o.kt)("inlineCode",{parentName:"p"},"rancher")," can execute privileged commands without entering a password:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Run a privileged command\nrancher@node1:~> sudo blkid\n\n# Or become root\nrancher@node1:~> sudo -i\nnode1:~ # blkid\n")),(0,o.kt)("h2",{id:"how-can-i-install-packages-why-are-some-paths-read-only"},"How can I install packages? Why are some paths read-only?"),(0,o.kt)("p",null,"The OS file system, like a container image, is image-based and immutable except in some directories."),(0,o.kt)("p",null,"We recommend using a ",(0,o.kt)("strong",{parentName:"p"},"toolbox container")," to run programs not packaged in the Harvester OS for debugging purposes. Please see ",(0,o.kt)("a",{parentName:"p",href:"https://harvesterhci.io/kb/package_your_own_toolbox_image/"},"this article")," to learn how to build and run a toolbox container."),(0,o.kt)("p",null,"The Harvester OS also provides a way to enable the read-write mode temporarily. Please follow the following steps:"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Enabling read-write mode might break your system if files are modified. Please use it at your own risk.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"For version ",(0,o.kt)("inlineCode",{parentName:"p"},"v0.3.0"),", we need to apply a workaround first to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1388"},"make some directories non-overlaid")," after enabling read-write mode. On a running Harvester node, run the following command as root:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'cat > /oem/91_hack.yaml <<\'EOF\'\nname: "Rootfs Layout Settings for debugrw"\nstages:\n  rootfs:\n    - if: \'grep -q root=LABEL=COS_ACTIVE /proc/cmdline && grep -q rd.cos.debugrw /proc/cmdline\'\n      name: "Layout configuration for debugrw"\n      environment_file: /run/cos/cos-layout.env\n      environment:\n        RW_PATHS: " "\nEOF\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Reboot the system to GRUB menu. Press ESC to stay on the menu."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{src:n(82136).Z,width:"717",height:"394"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," on first menuentry. Append ",(0,o.kt)("inlineCode",{parentName:"p"},"rd.cos.debugrw")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," line. Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot the system."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{src:n(13662).Z,width:"716",height:"400"})))),(0,o.kt)("h2",{id:"how-to-permanently-edit-kernel-parameters"},"How to permanently edit kernel parameters"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The following steps are a workaround. Harvester will inform the community once a permanent resolution is in place.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Re-mount state directory in rw mode:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"# blkid -L COS_STATE\n/dev/vda2\n# mount -o remount,rw /dev/vda2 /run/initramfs/cos-state\n"))),(0,o.kt)("li",{parentName:"ul"},"Edit the grub config file and append parameters to the ",(0,o.kt)("inlineCode",{parentName:"li"},"linux (loop0)$kernel $kernelcmd")," line. The following example adds a ",(0,o.kt)("inlineCode",{parentName:"li"},"nomodeset")," parameter:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'# vim /run/initramfs/cos-state/grub2/grub.cfg\nmenuentry "Harvester ea6e7f5-dirty" --id cos {\n  search.fs_label COS_STATE root\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n  set root=($root)\n  source (loop0)/etc/cos/bootargs.cfg\n  linux (loop0)$kernel $kernelcmd nomodeset\n  initrd (loop0)$initramfs\n}\n'))),(0,o.kt)("li",{parentName:"ul"},"Reboot for changes to take effect.")),(0,o.kt)("h2",{id:"how-to-change-the-default-grub-boot-menu-entry"},"How to change the default GRUB boot menu entry"),(0,o.kt)("p",null,"To change the default entry, first check the ",(0,o.kt)("inlineCode",{parentName:"p"},"--id")," attribute of a menu entry. Grub menu entries are located in the following files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/run/initramfs/cos-state/grub2/grub.cfg"),": Contains the default, fallback, and recovery entries"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"/run/initramfs/cos-state/grubmenu"),": Contains the debug entry")),(0,o.kt)("p",null,"In the following example, the id of the entry is ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# cat \\\n    /run/initramfs/cos-state/grub2/grub.cfg \\\n    /run/initramfs/cos-state/grubmenu\n\n<...>\nmenuentry "${display_name} (debug)" --id debug {\n  search --no-floppy --set=root --label COS_STATE\n  set img=/cOS/active.img\n  set label=COS_ACTIVE\n  loopback loop0 /$img\n  set root=($root)\n  source (loop0)/etc/cos/bootargs.cfg\n  linux (loop0)$kernel $kernelcmd ${extra_cmdline} ${extra_passive_cmdline} ${crash_kernel_params}\n  initrd (loop0)$initramfs\n}\n')),(0,o.kt)("p",null,"You can configure the default entry by running the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# mount -o remount,rw /run/initramfs/cos-state\n# grub2-editenv /run/initramfs/cos-state/grub_oem_env set saved_entry=debug\n")),(0,o.kt)("p",null,"If necessary, you can undo the change by running the command ",(0,o.kt)("inlineCode",{parentName:"p"},"grub2-editenv /run/initramfs/cos-state/grub_oem_env unset saved_entry"),"."),(0,o.kt)("h2",{id:"how-to-debug-a-system-crash-or-hang"},"How to debug a system crash or hang"),(0,o.kt)("h3",{id:"collect-crash-log"},"Collect crash log"),(0,o.kt)("p",null,"If kernel panic traces are not recorded in the system log when a system crashes, one reliable way to locate the crash log is to use a serial console."),(0,o.kt)("p",null,"To enable outputting of kernel messages to a serial console, please use the following steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Boot the system to GRUB menu. Press ESC to stay on the menu.\n",(0,o.kt)("img",{src:n(82136).Z,width:"717",height:"394"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Press ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," on first menuentry. Append ",(0,o.kt)("inlineCode",{parentName:"p"},"console=ttyS0,115200n8")," to the ",(0,o.kt)("inlineCode",{parentName:"p"},"linux (loop0)$kernel $kernelcmd")," line. Press ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot the system."),(0,o.kt)("p",{parentName:"li"},"  ",(0,o.kt)("img",{src:n(89528).Z,width:"714",height:"399"})))),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Adjust the ",(0,o.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/serial-console.html"},"console options")," according to your environment. ",(0,o.kt)("strong",{parentName:"p"},"Make sure")," to append the ",(0,o.kt)("inlineCode",{parentName:"p"},"console=")," string at the end of the line.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect to the serial port to capture logs.")),(0,o.kt)("h3",{id:"collect-crash-dumps"},"Collect crash dumps"),(0,o.kt)("p",null,"For kernel panic crashes, you can use kdump to collect crash dumps."),(0,o.kt)("p",null,"By default, the OS is booted without the kdump feature enabled. Users can enable the feature by selecting the ",(0,o.kt)("inlineCode",{parentName:"p"},"debug")," menuentry when booting, as in the following example:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(44385).Z,width:"716",height:"397"})),(0,o.kt)("p",null,"When a system crashes, a crash dump will be stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/var/crash/<time>")," directory. Providing the crash dump to developers helps them to troubleshoot and resolve issues."))}m.isMDXComponent=!0},89528:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-edit-first-menuentry-add-console-d0a4d079aab7e7aab0e7236a11e30b58.png"},13662:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-edit-first-menuentry-add-debugrw-d91f61ee1babd6bc5d80f511a9502641.png"},44385:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-enable-kdump-96964fc062aa7c145bc5f34978be7173.png"},82136:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/os-stop-on-first-menuentry-2a56e0b304663f6908becc633e8befa9.png"}}]);