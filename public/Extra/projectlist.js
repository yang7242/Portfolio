const list = [];

const AD = {
    project: "Active Directory",
    description: "Active Directory is important because it provides centralized control over user access, security policies, and network resources. It is widely used in IT environments to manage large numbers of users and devices efficiently across domains. AD is essential for businesses, schools, and organizations that need secure, scalable, and organized network infrastructure. This project uses virtual machines to mimic handling the infrastructure and setting up in order to gain an understanding.",
    synposis: "Active Directory (AD) is a directory service that manages and authenticates users, computers, and resources within a networked domain.",
    progress: "Complete",
    images: [
        {slides:["/public/Images/AD-project/Network-Sharing-Center.png", "/public/Images/AD-project/Network-Status-Settings.png"], comment:"The network is configured to maintain a stable connection to the internet through the Internet Service Provider (ISP). This allows all devices in the network to access online resources, updates, cloud services, and remote communications. At the same time, the settings allow for the existence of a separate internal domain network. This is crucial in environments like homes with smart devices or organizations with internal servers and shared resources. A domain network helps manage users, permissions, and data access across multiple devices under centralized control — all without interfering with external internet access."},
        {slides:["/public/Images/AD-project/Adding-Roles1.png", "/public/Images/AD-project/Adding-Roles2.png", "/public/Images/AD-project/Adding-Roles3.png"], comment:"Adding roles like Active Directory Domain Services (AD DS) is essential for building a secure and manageable network. AD DS is the foundation of a domain, enabling centralized user authentication, access control, and policy management. This setup improves security, simplifies administration, and helps maintain a stable IT infrastructure by allowing administrators to control resources and delegate tasks efficiently."},
        {slides:["/public/Images/AD-project/Setting-UP-DHCP.png", "/public/Images/AD-project/Authorized-DHCP.png", "/public/Images/AD-project/Server-Manager-DHCP.png"], comment:"DHCP (Dynamic Host Configuration Protocol) is responsible for automatically assigning IP addresses to devices that connect to the network. This ensures that each device receives a valid IP address without manual setup, making network management faster and more efficient. DHCP is essential for maintaining communication between devices in the domain and keeping the network organized."},
        {slides:["/public/Images/AD-project/Running-Create-User-Script.png", "/public/Images/AD-project/AD-Script-Outcome.png", "/public/Images/AD-project/List-Of-Names-And-Script.png"], comment:"These scripts are designed to automate the process of adding hundreds of users to Active Directory, eliminating the need to manually input each name. By using a CSV file with user data and a PowerShell script, the system can quickly loop through the list and create each user account with consistent formatting, permissions, and organizational units. This not only saves time but also ensures accuracy and consistency — demonstrating both scripting efficiency and real-world IT problem-solving skills."},
        {slides:["/public/Images/AD-project/Establishing-Connection-To-Client.png", "/public/Images/AD-project/Network-Connection-To-Client.png"], comment:"Joining a client machine to the domain allows it to be centrally managed by the domain controller. In corporate environments, new computers must be joined to the domain so users can log in with their domain credentials, apply security policies, and access shared resources. This process is a key step in integrating devices into a secure and organized IT infrastructure."},
    ]
}

const SOHO = {
    project: "Small Office Home Office",
    description: "SOHO (Small Office/Home Office) refers to a network setup for small-scale operations, providing essential infrastructure like routers and switches to enable communication and internet access for a limited number of devices, and it is important because it allows efficient resource sharing, secure internet access, and streamlined management in smaller environments. We use packet tracer to mimic the infrastructure and setting up a network for each environment.",
    synposis: "SOHO (Small Office/Home Office) refers to a network setup designed for small-scale operations, providing basic infrastructure like routers and switches to enable internal communication and internet access for a limited number of devices.",
    progress: "Complete",
    images: [
        {slides:["/public/Images/SOHO-project/Screenshot1.png"], comment:"This screenshot shows the foundation of the network, with the router and switch connecting all devices together, creating a complete and functional system."},
        {slides:["/public/Images/SOHO-project/Screenshot2.png"], comment:"This screenshot shows the network separated into departments, creating subnetworks that organize and isolate traffic. Separating the network like this improves security, boosts performance, and makes managing resources easier by keeping each department's devices within their own segment."},
        {slides:["/public/Images/SOHO-project/Screenshot3.png"], comment:"Subnetting is a crucial networking skill that involves dividing a larger network into smaller, organized segments. It is not the easiest or the hardest task, but knowing how to subnet shows a strong understanding of network design, resource management, and efficient IP address allocation. Mastering subnetting is a pivotal part of building secure and scalable networks."},
        {slides:["/public/Images/SOHO-project/Screenshot4.png"], comment:"This screenshot demonstrates the successful configuration of the router, switch, and connected devices. The main purpose is to show that I have the skills needed to set up and configure essential network hardware, a key part of building and maintaining functional networks."},
        {slides:["/public/Images/SOHO-project/Screenshot5.png","/public/Images/SOHO-project/Screenshot5.1.png"], comment:"This screenshot shows the finished network setup with departments separated by VLANs, each labeled and color-coded for clarity. It highlights how each department is organized within its own VLAN while staying connected to the overall network infrastructure. This demonstrates a complete understanding of network segmentation, organization, and professional-level design."}
    ]
}

// const temp = {
//     project: "",
//     description: "",
//     synposis: "",
//     progress: "Completed/Incomplete/Inprogress",
//     images: [
//         {slides:[""], comment:""},
//         {slides:[""], comment:""},
//         {slides:[""], comment:""},
//     ]
// }


list.push(AD, SOHO);

module.exports = { list:list};  //const { list } = require('./projectlist.js');
