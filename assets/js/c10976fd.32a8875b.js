"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[36178],{55234:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>c});t(67294);var a=t(3905);const n={sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},i=void 0,s={unversionedId:"rancher/rancher-integration",id:"version-v1.1/rancher/rancher-integration",title:"Rancher Integration",description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1.",source:"@site/versioned_docs/version-v1.1/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/v1.1/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/rancher-integration.md",tags:[],version:"v1.1",lastUpdatedAt:1729519469,formattedLastUpdatedAt:"Oct 21, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"api",previous:{title:"PCI Devices",permalink:"/v1.1/advanced/pcidevices"},next:{title:"Virtualization Management",permalink:"/v1.1/rancher/virtualization-management"}},o={},c=[{value:"Rancher &amp; Harvester Support Matrix",id:"rancher--harvester-support-matrix",level:2},{value:"Deploying Rancher Server",id:"deploying-rancher-server",level:2},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],l={toc:c},h="wrapper";function u({components:e,...r}){return(0,a.kt)(h,{...l,...r,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/index"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Starting with Rancher v2.6.1, Rancher has integrated Harvester by default to centrally manage VMs and containers."),(0,a.kt)("h2",{id:"rancher--harvester-support-matrix"},"Rancher & Harvester Support Matrix"),(0,a.kt)("p",null,"For the support matrix, please see ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-1/#anchor-h4-item2"},"Harvester & Rancher Support Matrix"),"."),(0,a.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,a.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"authentication")," feature and RBAC control for ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualization-management",src:t(12872).Z,width:"5114",height:"1796"})),(0,a.kt)("h2",{id:"deploying-rancher-server"},"Deploying Rancher Server"),(0,a.kt)("p",null,"To use Rancher with Harvester, please install the Rancher and Harvester in two separated servers. If you want to try out the integration features, you can create a VM in Harvester and install Rancher v2.6.3 or above (the latest stable version is recommended)."),(0,a.kt)("p",null,"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster with the provider of your choice:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS")," (uses Terraform)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace")," (uses Amazon EKS)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure")," (uses Terraform)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean")," (uses Terraform)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP")," (uses Terraform)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud")," (uses Terraform)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Do not install Rancher with Docker in production"),". Otherwise, your environment may be damaged and your cluster may not be recovered. Installing Rancher in Docker should only be used for quick evaluation and testing purposes."),(0,a.kt)("p",{parentName:"admonition"},"To install Rancher with Docker:"),(0,a.kt)("ol",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,a.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,a.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,a.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,a.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.9\n"))),(0,a.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,a.kt)("p",null,"With Rancher's Virtualization Management feature, you can now import and manage Harvester clusters.\nBy clicking on one of the clusters, you are able to view and manage the imported Harvester cluster resources like Hosts, VMs, images, volumes, etc. Additionally, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Virtualization Management")," leverages existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,a.kt)("p",null,"For more details, please check the ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/virtualization-management"},"virtualization management")," page."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"import-cluster",src:t(49776).Z,width:"2559",height:"988"})),(0,a.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage guest Kubernetes clusters."),(0,a.kt)("p",null,"Starting with Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference the ",(0,a.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/node-driver"},"node-driver")," page for more details."))}u.isMDXComponent=!0},49776:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},12872:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);