"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[55735],{80528:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});n(67294);var a=n(3905),t=n(25108);const s={sidebar_position:7,sidebar_label:"Rancher Terraform",title:"Rancher Terraform",keywords:["Harvester","harvester","Rancher","rancher","Terraform","terraform"],description:"Rancher Terraform allows administrators to create and manage RKE2 guest clusters using Terraform."},o=void 0,i={unversionedId:"rancher/rancher-terraform",id:"rancher/rancher-terraform",title:"Rancher Terraform",description:"Rancher Terraform allows administrators to create and manage RKE2 guest clusters using Terraform.",source:"@site/docs/rancher/rancher-terraform.md",sourceDirName:"rancher",slug:"/rancher/rancher-terraform",permalink:"/v1.4/rancher/rancher-terraform",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/rancher-terraform.md",tags:[],version:"current",lastUpdatedAt:1725352560,formattedLastUpdatedAt:"Sep 3, 2024",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"Rancher Terraform",title:"Rancher Terraform",keywords:["Harvester","harvester","Rancher","rancher","Terraform","terraform"],description:"Rancher Terraform allows administrators to create and manage RKE2 guest clusters using Terraform."},sidebar:"api",previous:{title:"Resource Quotas",permalink:"/v1.4/rancher/resource-quota"},next:{title:"Import Existing Cluster built on Harvester VM",permalink:"/v1.4/rancher/import-existing-vm"}},c={},l=[{value:"Deployment",id:"deployment",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploy Guest Clusters Using the Rancher Terraform Provider",id:"deploy-guest-clusters-using-the-rancher-terraform-provider",level:3}],m=e=>function(r){return t.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",r)},p=m("Tabs"),d=m("TabItem"),u={toc:l},h="wrapper";function g({components:e,...r}){return(0,a.kt)(h,{...u,...r,components:e,mdxType:"MDXLayout"},(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/rancher/rancher2/"},"Rancher Terraform Provider")," allows administrators to create and manage RKE2 guest clusters using Terraform."),(0,a.kt)("h2",{id:"deployment"},"Deployment"),(0,a.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester VMs."),(0,a.kt)("li",{parentName:"ul"},"The Harvester VMs that run as guest Kubernetes nodes are in the same namespace.")),(0,a.kt)("h3",{id:"deploy-guest-clusters-using-the-rancher-terraform-provider"},"Deploy Guest Clusters Using the Rancher Terraform Provider"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create an API key."),(0,a.kt)("p",{parentName:"li"},"On the Rancher UI, go to ",(0,a.kt)("strong",{parentName:"p"},"Account & API Keys")," > ",(0,a.kt)("strong",{parentName:"p"},"Create API key")," > ",(0,a.kt)("strong",{parentName:"p"},"Create"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Create API Key",src:n(34860).Z,width:"2616",height:"1444"}),"\n",(0,a.kt)("img",{alt:"Access &amp; Secret Keys",src:n(34229).Z,width:"2614",height:"1458"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain the Harvester cluster ID."),(0,a.kt)("p",{parentName:"li"},"On the Rancher UI, go to ",(0,a.kt)("strong",{parentName:"p"},"Virtualization Management")," > ",(0,a.kt)("strong",{parentName:"p"},"Manage")," > ",(0,a.kt)("strong",{parentName:"p"},"Related Resources")," > ",(0,a.kt)("strong",{parentName:"p"},"Mgmt Cluster Name"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Harvester Cluster ID",src:n(25137).Z,width:"2612",height:"1446"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Obtain the kubeconfig for the Harvester Cloud Provider and the Harvester CSI Driver."),(0,a.kt)(p,{mdxType:"Tabs"},(0,a.kt)(d,{value:"ui",label:"UI",default:!0,mdxType:"TabItem"},(0,a.kt)("p",{parentName:"li"},"On the Rancher UI, go to ",(0,a.kt)("strong",{parentName:"p"},"Virtualization Management"),". Locate the target Harvester cluster in the list and then select ",(0,a.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,a.kt)("strong",{parentName:"p"},"Download KubeConfig"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Download Kubeconfig",src:n(93891).Z,width:"1852",height:"1098"}))),(0,a.kt)(d,{value:"shell",label:"Shell",mdxType:"TabItem"},(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# Generate harvester cloud provider kubeconfig\nRANCHER_SERVER_URL="<RANCHER_SERVER_URL>" # Pure server URL like https://192.168.0.181:6443\nRANCHER_ACCESS_KEY="<RANCHER_ACCESS_KEY>"\nRANCHER_SECRET_KEY="<RANCHER_SECRET_KEY>"\nHARVESTER_CLUSTER_ID="<HARVESTER_CLUSTER_ID>"\nCLUSTER_NAME="rke2-demo"\ncurl -k -X POST ${RANCHER_SERVER_URL}/k8s/clusters/${HARVESTER_CLUSTER_ID}/v1/harvester/kubeconfig \\\n-H \'Content-Type: application/json\' \\\n-u ${RANCHER_ACCESS_KEY}:${RANCHER_SECRET_KEY} \\\n-d \'{"clusterRoleName": "harvesterhci.io:cloudprovider", "namespace": "default", "serviceAccountName": "\'${CLUSTER_NAME}\'"}\' | xargs | sed \'s/\\\\n/\\n/g\' > ${CLUSTER_NAME}-kubeconfig\n'))))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare a ",(0,a.kt)("inlineCode",{parentName:"p"},"provider.tf")," file with the following content:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\nrequired_providers {\n    rancher2 = {\n        source  = "rancher/rancher2"\n        version = "4.2.0"\n        }\n    }\n}\n\n# Configure the Rancher2 provider to admin\nprovider "rancher2" {\n    api_url    = "<api_url>" # API Endpoint on Account & API Keys page\n    access_key = "<access_key>"\n    secret_key = "<secret_key>"\n    insecure   = true # Set to true if the Rancher server uses a self-signed certificate\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Prepare a ",(0,a.kt)("inlineCode",{parentName:"p"},"main.tf")," file with the following content:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-hcl"},'# Get imported harvester cluster info\ndata "rancher2_cluster_v2" "harv" {\n    name = "<harvester_cluster_name_in_rancher>"\n}\n\n# Create a new Cloud Credential for an imported Harvester cluster\nresource "rancher2_cloud_credential" "harv-cred" {\n    name = "harv-cred"\n    harvester_credential_config {\n        cluster_id = data.rancher2_cluster_v2.harv.cluster_v1_id\n        cluster_type = "imported"\n        kubeconfig_content = data.rancher2_cluster_v2.harv.kube_config\n    }\n}\n\n# Create a new rancher2 machine config v2 using harvester node_driver\nresource "rancher2_machine_config_v2" "rke2-machine" {\n    generate_name = "rke2-machine"\n    harvester_config {\n        vm_namespace = "default"\n        cpu_count = "2"\n        memory_size = "4"\n        disk_info = <<EOF\n        {\n            "disks": [{\n                "imageName": "default/<vmimage-name>",\n                "size": 15,\n                "bootOrder": 1\n            }]\n        }\n        EOF\n        network_info = <<EOF\n        {\n            "interfaces": [{\n                "networkName": "default/<network-name>"\n            }]\n        }\n        EOF\n        ssh_user = "<ssh_user>"\n        user_data = <<EOF\n        package_update: true\n        packages:\n        - qemu-guest-agent\n        - iptables\n        runcmd:\n        - - systemctl\n            - enable\n            - \'--now\'\n            - qemu-guest-agent.service\n        EOF\n    }\n}\n\nresource "rancher2_cluster_v2" "rke2-demo" {\n    name = "rke2-demo"\n    kubernetes_version = "v1.28.10+rke2r1"\n    rke_config {\n        machine_pools {\n            name = "pool1"\n            cloud_credential_secret_name = rancher2_cloud_credential.harv-cred.id\n            control_plane_role = true\n            etcd_role = true\n            worker_role = true\n            quantity = 1\n            machine_config {\n                kind = rancher2_machine_config_v2.rke2-machine.kind\n                name = rancher2_machine_config_v2.rke2-machine.name\n            }\n        }\n\n        machine_selector_config {\n            config = yamlencode({\n                cloud-provider-config = file("${path.module}/rke2-demo-kubeconfig")\n                cloud-provider-name = "harvester"\n            })\n        }\n\n        machine_global_config = <<EOF\n        cni: "calico"\n        disable-kube-proxy: false\n        etcd-expose-metrics: false\n        EOF\n\n        upgrade_strategy {\n            control_plane_concurrency = "1"\n            worker_concurrency = "1"\n        }\n\n        etcd {\n            snapshot_schedule_cron = "0 */5 * * *"\n            snapshot_retention = 5\n        }\n\n        chart_values = <<EOF\n        harvester-cloud-provider:\n        clusterName: rke2-demo\n        cloudConfigPath: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n        EOF\n    }\n}\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform init"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"terraform apply"),"."))))}g.isMDXComponent=!0},34229:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/access-and-secret-keys-cc7f4965923f284977b609ab4875257a.png"},34860:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/create-api-key-a7b62341f3b226dd9e54bb5fa96a8a0a.png"},93891:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/download-kubeconfig-harvester-e1241965aecabbe4df32a0e7fd78deff.png"},25137:(e,r,n)=>{n.d(r,{Z:()=>a});const a=n.p+"assets/images/harvester-cluster-id-ce30cab1295221e4a317f6510b112fa9.png"}}]);