import React, { useState } from 'react';

import './Loginform.css';

//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';

// form and modal modules
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
  Modal
} from 'antd';
import 'antd/dist/reset.css';
import { QuestionCircleOutlined } from '@ant-design/icons';


class Loginform extends React.Component {


  render() {
    // Register Form
    const { Option } = Select;
    const AutoCompleteOption = AutoComplete.Option;
    const residences = [
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ];
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 8,
        },
      },
      wrapperCol: {
        xs: {
          span: 24,
        },
        sm: {
          span: 16,
        },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const CollectionCreateForm = ({ visible, onCreate, onCancel }) => {
      const [form] = Form.useForm();

      const onFinish = (values) => {
        console.log('Received values of form: ', values);
      };

   
      const [autoCompleteResult, setAutoCompleteResult] = useState([]);

      const onWebsiteChange = (value) => {
        if (!value) {
          setAutoCompleteResult([]);
        } else {
          setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
        }
      };

      const websiteOptions = autoCompleteResult.map((website) => ({
        label: website,
        value: website,
      }));
      return (
        <Modal
          visible={visible}
          title="Register"
          okText="Register"
          cancelText="Cancel"
          
          onCancel={onCancel}
          onOk={() => {
            form
              .validateFields()
              .then((values) => {
                form.resetFields();
                onCreate(values);
              })
              .catch((info) => {
                console.log('Validate Failed:', info);
              });
          }}
        >
          <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            initialValues={{
              residence: ['zhejiang', 'hangzhou', 'xihu'],
              prefix: '86',
            }}
            scrollToFirstError
          >
            <Form.Item
              name="nickname"
              label={
                <span>
                  Username
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
                {
                  required: true,
                  message: 'Please input your E-mail!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Please confirm your password!',
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject('The two passwords that you entered do not match!');
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            {/* <Form.Item
              name="nickname"
              label={
                <span>
                  Username
                  <Tooltip title="What do you want others to call you?">
                    <QuestionCircleOutlined />
                  </Tooltip>
                </span>
              }
              rules={[
                {
                  required: true,
                  message: 'Please input your nickname!',
                  whitespace: true,
                },
              ]}
            >
              <Input />
            </Form.Item> */}

          

            <Form.Item
              name="phone"
              label="Phone Number"
              rules={[
                {
                  required: true,
                  message: 'Please input your phone number!',
                },
              ]}
            >
              <Input
              
              />
            </Form.Item>

            
         
          </Form>
        </Modal>
      );
    };
    //popup and form code


    const CollectionsPage = () => {
      const [visible, setVisible] = useState(false);


      //With this, we will get all field values.
      const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
      };

      return (
        <>
          <button className="button-64"  role="button"
            // type="primary"
            onClick={() => {
              setVisible(true);
            }}
          >
            <span class="text">Register</span>
          </button>
          <CollectionCreateForm
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </>
      );
    };
    return (
      < >
        {/* <div class="jumbotron text-center">
          {/* <h3>Therichpost.com</h3><br /> */}

          {/* </div> */}

            {/* <div className="container"> */} 

              <CollectionsPage />
            {/* </div> */}
        </>
        );
};

};

export default Loginform;









// import React, { useState } from 'react';

// function Loginform() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('email', email);

//     fetch('http://localhost:3000/api/robopod', {
//       method: 'POST',
//       body: formData
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log(data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Loginform;