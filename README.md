# SHR Tools

This GitHub repository contains Node.js packages for parsing CIMPL (Clinical Information Modeling and Profiling Language) definitions and exporting them as a FHIR Implementation Guide, Data Dictionary, and/or Javadoc Style Model Documentation. Each individual package contains more information on its use.

The CIMPL base class definitions, FHIR mappings, and clinical model definitions can be found in the [shr-spec](https://github.com/standardhealth/shr-spec) repo. Documentation on the CIMPL language can be found [here](http://standardhealthrecord.org/cimpl-doc/#cimpl6LanguageReference/).

# Installing SHR-Tools for Development

The entire tool chain is coordinated from the `shr-cli` package. For users who wish to use the tool chain, only `shr-cli` is needed. It can be installed by following the instructions on the [CIMPL Setup and Installation Guide](http://standardhealthrecord.org/cimpl-doc/#cimplInstall/). However, developers who wish to work on components of the tool chain will need to follow the instructions below for cloning and building all the packages.

### Clone SHR-Tools

From within your desired directory, you should clone this repository:
```bash
cd ~/dev
git clone https://github.com/standardhealth/shr-tools.git
```
The packages that are relevant to a developer are found in the `packages` directory.

### Build SHR-Tools

SHR-Tools is managed using [Lerna](https://github.com/lerna/lerna), a tool for managing JavaScript packages with multiple packages. So first you should install Lerna:
```bash
npm install -g lerna
```
Once Lerna is installed, you can build and link the tool chain using:
```bash
lerna bootstrap
```
This will build external dependencies for each of the packages, and locally link together the `shr-*` packages. For example, if `shr-cli` depends on `shr-fhir-export` (which it does), then `shr-cli/node_modules/shr-fhir-export` would normally contain a copy of the `shr-fhir-export code` that was downloaded from NPM. However, `lerna bootstrap` links packages so that `shr-cli/node_modules/shr-fhir-export` will actually be a symlink to your local `shr-fhir-export` code. This is what allows you to test your local changes in the context of `shr-cli`.

### Run the SHR tool chain
You should now be able to run the tool chain with the `shr-cli` package, which will be referencing your local code. To run the tool chain, you will need CIMPL definitions to give as input. The SHR CIMPL definitions are found in the [shr-spec](https://github.com/standardhealth/shr-spec) directory. Clone this repository:
```bash
cd ~/dev
git clone https://github.com/standardhealth/shr-spec.git
```
Now you can run the tool chain with the `shr-spec` CIMPL definitions:
```bash
cd ~/dev/shr-tools/packages/shr-cli
node . ~/dev/shr-spec/spec
```

# License

Copyright 2016, 2017, 2018, 2019 The MITRE Corporation

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.