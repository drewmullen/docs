/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  sidebar: [
    {
      type: 'doc',
      id: 'overview',
      label: 'Overview',
    },
    {
      type: 'category',
      label: 'Installation',
      link: { type: 'doc', id: 'install/requirements' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'install',
        },
      ],
    },
    {
      type: 'doc',
      id: 'airgap',
      label: 'AirGap',
    },
    {
      type: 'category',
      label: 'Upgrade',
      link: { type: 'doc', id: 'upgrade/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'upgrade',
        },
      ],
    },
    {
      type: 'doc',
      id: 'authentication',
      label: 'Authentication',
    },
    {
      type: 'doc',
      id: 'upload-image',
      label: 'Upload Image',
    },
    {
      type: 'doc',
      id: 'host/host-management',
      label: 'Host Management',
    },
    {
      type: 'category',
      label: 'VM Management',
      link: { type: 'doc', id: 'vm/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'vm',
        },
      ],
    },
    {
      type: 'category',
      label: 'Volume Management',
      link: { type: 'doc', id: 'volume/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'volume',
        },
      ],
    },
    {
      type: 'category',
      label: 'Networking',
      link: { type: 'doc', id: 'networking/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'networking',
        },
      ],
    },
    {
      type: 'doc',
      id: 'logging/harvester-logging',
      label: 'Logging',
    },
    {
      type: 'doc',
      id: 'monitoring/harvester-monitoring',
      label: 'Monitoring',
    },
    {
      type: 'category',
      label: 'Advanced',
      link: { type: 'doc', id: 'advanced/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'advanced',
        },
      ],
    },
    {
      type: 'category',
      label: 'Rancher Integration',
      link: { type: 'doc', id: 'rancher/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'rancher',
        },
      ],
    },
    {
      type: 'doc',
      id: 'terraform/terraform-provider',
      label: 'Terraform',
    },
    {
      type: 'category',
      label: 'Troubleshooting',
      link: { type: 'doc', id: 'troubleshooting/index' },
      items: [
        {
          type: 'autogenerated',
          dirName: 'troubleshooting',
        },
      ],
    },
    {
      type: 'doc',
      id: 'faq',
      label: 'FAQ',
    },
    {
      type: "category",
      label: "API",
      link: {
        type: "generated-index",
        title: "Harvester API",
        description:
            "This is the API doc of the Harvester server. The APIs are broken down into the categories below:",
      },
      items: require("./docs/api/sidebar.js"),
    },
  ],
};

module.exports = sidebars;