import React, { Component } from 'react'
import axios from 'axios'
import { Descriptions , Badge} from 'antd';

import 'antd/dist/antd.css';

export default class OwnerDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            ownerDetails: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/users/getOwnerNames')
            .then(res => {

                console.log(res.data.ownerDetails);
                this.setState({
                    ownerDetails: res.data.ownerDetails
                })
            })
            .catch(err => { throw err })
    }


    render() {
        const {ownerDetails} = this.state
        return (
            <div > 
                <center>
                    {
                        ownerDetails.length ? ownerDetails.map(owner =>
                            <div style={{ width: '75%' }} >
                                
                                <Descriptions
                                    title={`FIR No. ${owner.id}`}
                                    key={owner.id}
                                    bordered
                                // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                                >
                                    <Descriptions.Item label="Officer Name">{owner.name}</Descriptions.Item>
                                    <Descriptions.Item label="Address">{owner.address}</Descriptions.Item>
                                    <Descriptions.Item label="time">18:00:00</Descriptions.Item>
                                    <Descriptions.Item label="Status" span={3}>
                                    <Badge status={owner.status} text={owner.text} />
                                    </Descriptions.Item>
                                    <Descriptions.Item label="FIR Complain">
                                        My Car has been stolen
                                        Data disk type: MongoDB
                                         <br />
                                         Database version: 3.4
                                         <br />
                                         Package: dds.mongo.mid
                                         <br />
                                           Storage space: 10 GB
                                          <br />
                                          Replication factor: 3
                                          <br />
                                          Region: East China 1
                                </Descriptions.Item>
                                </Descriptions>
                            </div>
                        ) : null
                    }
                </center>
            </div>
        )
    }
}
