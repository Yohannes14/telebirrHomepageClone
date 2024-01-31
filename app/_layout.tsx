import { Stack } from "expo-router"
import CustomHeader from "../components/CustomHeader";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"
                options={{
                    header: () => <CustomHeader />
                }}
            />
        </Stack>
    )
}
export default RootLayout;