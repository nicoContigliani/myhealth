// Router.tsx
import { Tabs } from 'expo-router';

export default function Router() {
    return (
        <Tabs>
            <Tabs.Screen name="index" />
            <Tabs.Screen name="two" />
            <Tabs.Screen name="three" />
            <Tabs.Screen name="Todo" /> {/* Ensure this route is registered */}
        </Tabs>
    );
}
