# wct-none [![Build Status](https://travis-ci.org/Collaborne/wct-none.svg?branch=master)](https://travis-ci.org/Collaborne/wct-none)

A plugin for [web-component-tester](https://github.com/Polymer/web-component-tester) that provides a dummy browser.

The intent for this plugin is to make it possible to start the WCT webserver, but not waste any resources on starting a browser for tests. Instead the user can start whatever testing/debugging environment they want manually.

Learn more about the plugin in this [blog post](https://medium.com/collaborne-engineering/debug-polymer-tests-with-vs-code-7646d66d0608#.8wa43oiny).

## Example using Visual Studio as debugger

This examples show hows to use [Visual Studio Code](https://code.visualstudio.com) and the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) plugin to debug a component's test.

1. Install `web-component-tester` and the `wct-none` plugin into the project

   ```sh
   npm install --save-dev web-component-tester wct-none
   ```
   
   It is safe to save the plugin as development dependency in `package.json`, it will do nothing unless explicitly activated.

2. Create or modify `.vscode/launch.json` in the project

   ```json
   {
       "version": "0.2.0",
       "configurations": [
            {
                "type": "node",
                "request": "launch",
                "name": "Run wct",
                "program": "${workspaceRoot}/node_modules/.bin/wct",
                "args": [
                    "-p",
                    "--skip-plugin", "local",
                    "--plugin", "none",
                    "--webserver-port", "2000",
                    "--expanded",
                    "--simpleOutput",
                    "path/to/tests"
                ]
            },
            {
                "type": "chrome",
                "request": "launch",
                "name": "Run chrome for wct",
                "url": "http://localhost:2000/components/COMPONENT_NAME/generated-index.html",
                "webRoot": "${workspaceRoot}",
                "userDataDir": "${workspaceRoot}/.vscode/chrome"
            }
       ]
   }
   ```

   _Note that you must replace `COMPONENT_NAME` in the URL for Chrome, and `path/to/tests` with the path to the root of the test suite._

3. Enable the `debug.allowBreakpointsEverywhere` setting in the user or workspace preferences

   This makes it possible to set breakpoints everywhere, and let's Chrome work out how to best do that.

4. Launch the 'Run wct' configuration

   This will log an error about not being able to connect to 127.0.0.1:4444, which can be ignored. PR's welcome :)

5. Launch the 'Run chrome for wct' configuration

6. Set breakpoints etc inside Visual Studio

## License

    This software is licensed under the Apache 2 license, quoted below.

    Copyright 2017 Collaborne B.V. <http://github.com/Collaborne/>

    Licensed under the Apache License, Version 2.0 (the "License"); you may not
    use this file except in compliance with the License. You may obtain a copy of
    the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
    WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
    License for the specific language governing permissions and limitations under
    the License.
