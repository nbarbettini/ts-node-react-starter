import * as React from 'react';

import { Hello } from './hello/Hello';

export default class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <section className='app__container'>
                <Hello
                    header='the project'
                    subHeader='is ALIVE'
                />
            </section>
        );
    }
}