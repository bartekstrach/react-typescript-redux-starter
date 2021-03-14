import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import React from 'react';
import { createDevTools } from 'redux-devtools';

// TOGGLE DEV-TOOLS WITH CTRL + H
// CHANGE THEIR POSITION WITH CTRL + Q

export default createDevTools(
    <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q" defaultIsVisible={false}>
        <LogMonitor />
    </DockMonitor>
);
