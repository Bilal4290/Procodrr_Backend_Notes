=>   What is os ?

     os is a software which manages our hardware resources.

     It decides how much an application use disk memory, ram, cpu time etc


=>   What is kernel?

      Part of an operating system.
      It manages hardware for our operating system.


=>   Context switching :

          Context switching is a process in computing where the CPU switches from one task (or process) to another. This mechanism allows multiple processes or threads to share a single CPU or core, giving the appearance of multitasking.

          How It Happens:

            The scheduler (part of the kernel) decides which application runs on the CPU.
            The scheduler uses algorithms like:
                  Round-robin: Equal time for each application.
                  Priority-based: More important tasks get more time.


          Why Context Switching?

               Since a single core can execute only one instruction at a time, context switching creates the illusion of multitasking.


=>  Is kernel cpu processor and core are part of operating system :

          No, the CPU, processor, and cores are not part of the operating system; they are part of the computer's hardware. The kernel, however, is part of the operating system.


          Hardware vs Software:

           (1)  CPU (Processor and Core):

                  Hardware.
                  The physical component of the computer that executes instructions.
                  The operating system controls the CPU but does not include it.


           (2)  Kernel:

                  Software.
                  A core part of the operating system.
                  Acts as a bridge between the hardware (e.g., CPU, memory, storage) and the rest of the operating system and applications.

           (3)  Operating System:

                  Software.
                  Includes the kernel, system libraries, and utilities that manage hardware and provide a platform for applications to run.


            Relationships and Hierarchy

            Hardware (e.g., CPU) is at the bottom layer. It physically performs tasks.
            Kernel is the interface between hardware and the software applications.
            Operating System includes the kernel and additional tools to manage the system and provide user interfaces.
            Why It Matters
            CPU and cores are not part of the operating system but are controlled by it.
            The kernel is a part of the operating system and is responsible for managing and scheduling tasks for the CPU.


=>  Summary of Tasks :

           CPU/Core: Executes instructions.

           Kernel: Manages how tasks are assigned to the CPU and handles low-level operations like memory management and device interaction.

           Operating System: Provides a user-friendly way to interact with hardware and runs applications.

           Context Switching: A process managed by the kernel to allow multiple applications to share the CPU efficiently.