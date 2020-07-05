import React from 'react';
import * as serverData from './API';

class serverDetails extends React.Component {

    state = { serverList: [] }

    componentDidMount() {
        serverData.Server().then((response) =>
            this.setState({ serverList: response }));
    }


    renderTableData() {
        return this.state.serverList.map((server, index) => {
            const { ID, Name, IPAddress, Status, Time } = server
            return (
                <tr key={ID}>
                    <td>{Name}</td>
                    <td>{IPAddress}</td>
                    <td>{Status ? "Active" : "NotActive"}</td>
                    <td>{Time}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        let header;
        let data = this.state.serverList[0];
        if (data) {
            header = Object.keys(this.state.serverList[0])
        }
        else {
            return null;
        }
        return header.map((key, index) => {
            if (index > 0) {
                return <th key={index}>{key.toUpperCase()}</th>
            }
        })
    }

    render() {
        return (
            <div>
                <h1 id='Server'>Server Active Status</h1>
                <table id='ServerData'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default serverDetails;
