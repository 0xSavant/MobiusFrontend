import { Text, Button } from "@mantine/core";

export default function Custom404() {
  return (
    <div>
  <Text weight="700" size="lg" px="lg" py="lg">Oops! We can't seem to find that page.</Text>
  <Text px="lg" py="lg" >Don't worry, we'll take you back home!</Text>
  <button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
      Return to Home
    </button>
    </div>
  )
}
