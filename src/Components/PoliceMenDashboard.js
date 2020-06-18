import React, { Component } from 'react'
import axios from 'axios'
import { Descriptions } from 'antd';

import 'antd/dist/antd.css';

export default class PoliceMenDashboard extends Component {

    constructor(props) {
        super(props)

        this.state = {
            policemen: ''
        }
    }


    componentDidMount() {
        axios.get('http://localhost:8080/users/getOwnerNames')
            .then(res => {

                console.log(res.data.ownerDetails);
                this.setState({
                    policemen: res.data.ownerDetails
                })
            })
            .catch(err => { throw err })
    }




    render() {

        // console.log('state of police....',this.state.policemen.length);

        const { policemen } = this.state
        console.log('log..........', policemen.length);





        return (

            <div>
                 <center>
                {
                    policemen.length ? policemen.map(police =>
                        <div style={{width:'50%'}}>
                           
                        <Descriptions
                            title="Owners Descriptions"
                            key={police.id}
                            bordered
                            // column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
                        >
                            <Descriptions.Item label="Officer Name">{police.name}</Descriptions.Item>
                            <Descriptions.Item label="Address">{police.address}</Descriptions.Item>
                            <Descriptions.Item label="time">18:00:00</Descriptions.Item>
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
