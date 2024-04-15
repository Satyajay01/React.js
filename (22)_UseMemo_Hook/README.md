UseMemo_Hook:-

This is useful for performance improvement because it reduces re-rendering.


* The code is executed line by line, so that all the functions which are not necessary for execution are also executed, which reduces the performance, and usememo_hook is introduced to solve this problem.

Thereby, if a particular function is to be executed, the function will be executed from UseMemo_Hook.*

