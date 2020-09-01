# cypress-retry-issue

## Hardware Overview:

  * Model Name:	MacBook Pro
  * Model Identifier:	MacBookPro14,3
  * Processor Name:	Quad-Core Intel Core i7
  * Processor Speed:	2.9 GHz
  * Number of Processors:	1
  * Total Number of Cores:	4
  * L2 Cache (per Core):	256 KB
  * L3 Cache:	8 MB
  * Hyper-Threading Technology:	Enabled
  * Memory:	16 GB

## Installing and Running  
```
npm install
npm run cy:run
```
alternatively, with CPU and memory usage
```
DEBUG=cypress:server:util:process_profiler npm run cy:run
```

## Results
When the test is run, I'm observing that the tests stop progressing usually at the 11th iteration.

This was first observed on our company website with more complex and numerous test specs, being able to replicate consistently with this test site, suggests there is a problem with Cypress not letting go of resources

### Chrome
![Alt text](docs/stalled-test-chrome.png?raw=true "Memory usage when stalled for Chrome")

### Electron
![Alt text](docs/stalled-test-electron.png?raw=true "Memory usage when stalled for Electron")
