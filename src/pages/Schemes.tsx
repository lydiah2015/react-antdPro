import { ProTable } from '@ant-design/pro-components';
import { request } from '@umijs/max';

export default function Schemes() {
  const columns = [
    {
      title: 'Scheme Name',
      dataIndex: 'name',
    },
  ];
  return (
    <>
      <div>Schemes</div>
      <ProTable
        columns={columns}
        request={async (params) => {
          const response = await request('https://api.dev.sycom-africa.com/api/v1/schemes', {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbnN0aXR1dGlvblB1YmxpY0lkIjoiMjZkOTkxM2MtYjNlZS00ODBiLTk4MzItNjBhZTJlN2Y5ZTE2IiwidXNlcl9uYW1lIjoiZGVtb0BzeWNvbWFmcmljYS5jb20iLCJmdWxsTmFtZSI6IkRlbW8gQWNjb3VudCIsImZvcmNlUGFzc3dvcmRSZXNldCI6ZmFsc2UsImF1dGhvcml0aWVzIjpbIlJFQURfRk9MREVSUyIsIlJFQURfSU5TVElUVVRJT05fVVNFUlMiLCJERUxFVEVfV09SS0ZMT1ciLCJVUERBVEVfUEFORUwiLCJERUxFVEVfUExBTiIsIkNSRUFURV9DT1VOVFkiLCJERUxFVEVfUFJPVklERVJfQ0FURUdPUllfVFlQRSIsIkNSRUFURV9FRElUSU9OIiwiVVBEQVRFX1BST1ZJREVSX0RJVklTSU9OX1RZUEUiLCJD…YWx0aCBMaW1pdGVkIiwiZXhwIjoxNjk4OTA4NzE4LCJqdGkiOiJlNDYyNWU0My0zNzFiLTRhNmYtYmY4Ny00ZGM3YzMzMjgxMTUiLCJwdWJsaWNJZCI6ImE0NjNhMjUyLWY4YzctNGE5OC04NGQzLTM5YTA3YmZiNDI1NyJ9.ET3FDZMapmUPuCH74u7iYHQeudR_txXEL9vvGHPld2DQQJGQ8ikmb7qMaY7pLpf9fd235AHxidMBHOwEvVKC_qxR7a9kTgUUJsopJGk8KyygzwKkBqmuJoyPGgqN7U92LxVAPJu9ztbF0B3IPhrAWxLQnstklv94X6ldwjNG49LZlS7L1H4nFTxjpblG3NshpfNqvz5dVa-yqR9_IidZUNzw5PgP_VyFehINp9L4b6t6WsBqaOnkUc-L1cCFPuTCymmoJNVtyShNsVA_4hC4XCWYF2uxdQACMNL0U4SM3O142hX8I8XRhxTt6HfF0-mVpVhfthOmwuXAskgnHT9kQg',
            },
          });

          console.log(response);
          return {
            data: response?.content,
          };
        }}
      />
    </>
  );
}

// ZmFydS1oZWFsdGgtd2ViLXVpOjhhZlJQOEFqUXhrTVo5M09lMHoydTg4N3hERFhQbWFObWZzMGRUOVRlaHYxaHBGamQyYndaN3JtQVY3ZDc3T2ljNjhmTjVYUGNnSGh0YXF2MXJST202WU1SVk5QU3JWVW1UWFo=
