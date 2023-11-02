import { ProTable } from '@ant-design/pro-components';
import { request } from 'umi';
import { FormOutlined } from "@ant-design/icons";

export default function UsersList() {
  const cols = [
    {
      title: 'Firstname',
      dataIndex: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      width: 20,
      render:avatar => <img alt={avatar} src={avatar}/>
    },
    {
      title: 'Edit',
      render: (row) => <FormOutlined 
      onClick={<Link to='/new-user'>New User</Link>}
      
      />,
      
          
      
       
    }
  

  ];
  return (
    <>
      {/* <div>UsersList</div> */}
      <ProTable
        columns={cols}
        request={async (params) => {
          const res = await request('https://reqres.in/api/users/')
          // const data = res.json()
          console.log(res)

          return res
        }}
      />
    </>
  );
}
