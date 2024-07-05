"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[63511],{96285:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>l});a(67294);var r=a(3905);const n={sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},i=void 0,o={unversionedId:"rancher/virtualization-management",id:"version-v0.3/rancher/virtualization-management",title:"Virtualization Management",description:"For Harvester v0.3.0 and above, virtualization management with the multi-cluster management feature will be supported using Rancher v2.6.x.",source:"@site/versioned_docs/version-v0.3/rancher/virtualization-management.md",sourceDirName:"rancher",slug:"/rancher/virtualization-management",permalink:"/v0.3/rancher/virtualization-management",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/virtualization-management.md",tags:[],version:"v0.3",lastUpdatedAt:1720145056,formattedLastUpdatedAt:"Jul 5, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},sidebar:"api",previous:{title:"Rancher Integration",permalink:"/v0.3/rancher/rancher-integration"},next:{title:"Harvester Node Driver",permalink:"/v0.3/rancher/node/node-driver"}},s={},l=[{value:"Multi-Tenancy",id:"multi-tenancy",level:2},{value:"Multi-Tenancy Example",id:"multi-tenancy-example",level:3},{value:"Delete Imported Harvester Cluster",id:"delete-imported-harvester-cluster",level:2}],c={toc:l},p="wrapper";function d({components:e,...t}){return(0,r.kt)(p,{...c,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/virtualization-management"})),(0,r.kt)("p",null,"For Harvester v0.3.0 and above, virtualization management with the multi-cluster management feature will be supported using Rancher v2.6.x."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, you will need to install Rancher v2.6.1 or above. For testing purposes, you can spin up a Rancher server using the following ",(0,r.kt)("inlineCode",{parentName:"li"},"docker run")," command: ",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.2\n")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"For a production environment setup, please refer to the official Rancher ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/"},"docs"),".")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Once the Rancher server is up and running, log in and click the hamburger menu and choose the ",(0,r.kt)("strong",{parentName:"li"},"Virtualization Management")," tab. Select ",(0,r.kt)("strong",{parentName:"li"},"Import Existing")," to import the downstream Harvester cluster into the Rancher server.\n",(0,r.kt)("img",{src:a(64688).Z,width:"1848",height:"724"})),(0,r.kt)("li",{parentName:"ol"},"Specify the ",(0,r.kt)("inlineCode",{parentName:"li"},"Cluster Name")," and click ",(0,r.kt)("strong",{parentName:"li"},"Create"),". You will then see the registration commands; copy the appropriate command and ssh to one of the Harvester management nodes to run this command accordingly.\n",(0,r.kt)("img",{src:a(51903).Z,width:"2190",height:"902"})),(0,r.kt)("li",{parentName:"ol"},"Once the agent node is ready, you should be able to view and access the imported Harvester cluster from the Rancher server and manage your VMs accordingly.\n",(0,r.kt)("img",{src:a(99463).Z,width:"2559",height:"801"})),(0,r.kt)("li",{parentName:"ol"},"From the Harvester UI, you can click the hamburger menu to navigate back to the Rancher multi-cluster management page.\n",(0,r.kt)("img",{src:a(52324).Z,width:"2555",height:"1222"}))),(0,r.kt)("h2",{id:"multi-tenancy"},"Multi-Tenancy"),(0,r.kt)("p",null,"In Harvester, we have leveraged the existing Rancher ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"RBAC authorization")," such that users can view and manage a set of resources based on their cluster and project role permissions."),(0,r.kt)("p",null,"Within Rancher, each person authenticates as a user, which is a login that grants a user access to Rancher. As mentioned in ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"Authentication"),", users can either be local or external."),(0,r.kt)("p",null,"Once the user logs into Rancher, their authorization, also known as access rights, is determined by global permissions and cluster and project roles."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},(0,r.kt)("strong",{parentName:"a"},"Global Permissions")),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define user authorization outside the scope of any particular cluster."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/"},(0,r.kt)("strong",{parentName:"a"},"Cluster and Project Roles")),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Define user authorization inside the specific cluster or project where users are assigned the role.")))),(0,r.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A cluster owner has full control over the cluster and all resources inside it, e.g., hosts, VMs, volumes, images, networks, backups, and settings."),(0,r.kt)("li",{parentName:"ul"},"A project user can be assigned to a specific project with permission to manage the resources inside the project.")),(0,r.kt)("h3",{id:"multi-tenancy-example"},"Multi-Tenancy Example"),(0,r.kt)("p",null,"The following example provides a good explanation of how the multi-tenant feature works:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, add new users via the Rancher ",(0,r.kt)("inlineCode",{parentName:"li"},"Users & Authentication")," page. Then click ",(0,r.kt)("inlineCode",{parentName:"li"},"Create")," to add two new separated users, such as ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," respectively.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," is a user with permission to manage a list of resources of a particular project, e.g., the default project."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," is a user with read-only permission of a particular project, e.g., the default project.\n",(0,r.kt)("img",{src:a(75605).Z,width:"2556",height:"1159"})))),(0,r.kt)("li",{parentName:"ol"},"Click one of the imported Harvester clusters after navigating to the Harvester UI.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Projects/Namespaces")," tab."),(0,r.kt)("li",{parentName:"ul"},"Select a project such as ",(0,r.kt)("inlineCode",{parentName:"li"},"default")," and click the ",(0,r.kt)("inlineCode",{parentName:"li"},"Edit Config")," menu to assign the users to this project with appropriate permissions. For example, the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," user will be assigned the project owner role.\n",(0,r.kt)("img",{src:a(81795).Z,width:"897",height:"733"})))),(0,r.kt)("li",{parentName:"ol"},"Continue to add the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly")," user to the same project with read-only permissions and click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".\n",(0,r.kt)("img",{src:a(22640).Z,width:"2559",height:"947"})),(0,r.kt)("li",{parentName:"ol"},"Open an incognito browser and log in as ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner"),"."),(0,r.kt)("li",{parentName:"ol"},"After logging in as the ",(0,r.kt)("inlineCode",{parentName:"li"},"project-owner")," user, click the ",(0,r.kt)("strong",{parentName:"li"},"Virtualization Management")," tab. There you should be able to view the cluster to which you have been assigned."),(0,r.kt)("li",{parentName:"ol"},"Click the ",(0,r.kt)("strong",{parentName:"li"},"Images")," tab to view a list of images previously uploaded to the harvester-public namespace. You can also upload your own image if needed."),(0,r.kt)("li",{parentName:"ol"},"Create a VM with one of the images that you have uploaded."),(0,r.kt)("li",{parentName:"ol"},"Log in with another user, e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"project-readonly"),", and this user will only have the read permission of this project.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"A known issue was found that allows the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1406"},"read-only user to be able to manage API actions"),".")),(0,r.kt)("h2",{id:"delete-imported-harvester-cluster"},"Delete Imported Harvester Cluster"),(0,r.kt)("p",null,"Users can delete the imported Harvester cluster from the Rancher UI via ",(0,r.kt)("strong",{parentName:"p"},"Virtualization Management > Harvester Clusters"),". Select the cluster you want to remove and click the ",(0,r.kt)("strong",{parentName:"p"},"Delete")," button to delete the imported Harvester cluster."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"delete-cluster",src:a(2164).Z,width:"3578",height:"1638"})),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Please do not run the ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ...")," command to delete the imported Harvester cluster as it will remove the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace which is required of the Harvester cluster.")))}d.isMDXComponent=!0},81795:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-member-943f18a8d8aab0377ddf8c74d15a44a4.png"},22640:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/added-user-74f30dba0c2ea1936837d3ebfa781335.png"},75605:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-user-9b8348a8edeeff5ea8537ea4739df041.png"},2164:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delete-harvester-cluster-d4571d1521fa3e2b3bb4078d456bc481.png"},52324:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-back-c989871813d3966b8175840c417c0396.png"},99463:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-cluster-view-066656890fd03300b5964da81dd0b079.png"},51903:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-importing-c728d9a8d8a4009e1c67312ef654814d.png"},64688:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vm-menu-9370f3a907e8bc5e4c78f2cf3ac17184.png"}}]);