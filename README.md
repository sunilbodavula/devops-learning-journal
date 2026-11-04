# DevOps Learning Journal

## Day 1: Introduction to DevOps

### What is DevOps?
DevOps combines practices, collaboration, and automation
to help teams deliver and maintain software reliably.

### Why do we need DevOps?
- To reduce manual work.
- To make software delivery more reliable.
- To identify problems earlier.
- To improve collaboration between development and operations.
- To monitor applications after deployment.

### My full-stack application
- Frontend: React
- Backend: Node.js and Express || Java and Springboot
- Database: PostgreSQL

### Software delivery journey
1. Write code.
2. Test the application.
3. Build the application.
4. Deploy it.
5. Monitor it.
6. Fix problems and improve the application.

### What I learned
DevOps is not a single tool. It is a way of improving
the process of building, delivering, and maintaining software.

## Day 2: Programs and Processes

### What is an operating system?
An operating system manages computer resources and provides
services that applications need to run.

### Program vs. Process
A program contains instructions.
A process is a running instance of a program.

### What I practised
- Created a JavaScript program that keeps running.
- Started the program using Node.js.
- Retrieved its Process ID using process.pid.
- Inspected the running process using PowerShell.
- Used Get-Process to inspect process information.
- Used Get-CimInstance to identify a process by its command line.
- Stopped the process using Ctrl+C.
- Verified that the process was no longer running.

### Key takeaway
A running application is managed by the operating system
as one or more processes. Process inspection helps us
investigate application behavior.

## Day 2.2: CPU and Memory Monitoring

### Concepts learned
- CPU executes program instructions.
- Memory holds data used by running applications.
- Node.js provides process.memoryUsage().
- heapUsed measures JavaScript heap memory in use.
- rss reports resident memory occupied by the process.
- PowerShell Get-Process provides process information.
- CPU in Get-Process represents cumulative CPU time in seconds.

### Practical work
- Created a Node.js resource-monitoring program.
- Observed memory usage over time.
- Retrieved the process ID.
- Inspected the same process using PowerShell.
- Compared Node.js memory readings with Windows process information.

### Key takeaway
Resource measurements help investigate application performance,
but individual readings do not necessarily identify the root cause
of a performance problem.

## Day 3: Networking Fundamentals

### What is networking?
Networking allows computers and devices to communicate and exchange information.

### What is an IP address?
An IP address identifies a network interface for communication using the Internet Protocol.

Example: `192.168.1.10`

### What is localhost?
Localhost refers to the computer making the request.

Common loopback addresses:
- IPv4: `127.0.0.1`
- IPv6: `::1`

### Practical exercises
- Used `ipconfig` to inspect network configuration.
- Identified the computer's IPv4 address.
- Used `ping 127.0.0.1` to test loopback communication.
- Used `ping localhost` to observe hostname resolution.

### Key takeaways
- IP addresses help identify network interfaces.
- Localhost refers to the current computer.
- Different devices have their own localhost.
- Ping uses ICMP and does not verify HTTP application health.

### What I learned
I understood how computers identify themselves for network communication and how localhost allows an application to communicate with the same computer.