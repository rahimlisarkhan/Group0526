import { Flex, Spin } from "antd"


export const Loading = () => {

    return <Flex justify="center" align="center" style={{ height: "50vh" }}>
              <Spin size="large" />
        </Flex>
}