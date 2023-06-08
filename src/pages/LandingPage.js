import { Box, Button, ChakraProvider, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import banner from '../images/banner.jpg';

function LandingPage() {
    return (
        <ChakraProvider>
            <Box>
                {/* Menu Bar */}
                <Flex align="center" justify="space-between" p={4}>
                    <Heading as="h1" fontSize="xl">
                        Artfinder
                    </Heading>
                    <Flex>
                        <Link href="#features" mr={4}>Features</Link>
                        <Link href="#about">About</Link>
                    </Flex>
                </Flex>
                {/* Intro Section */}
                <Flex bg="gray.100">
                    <Box flex="1">
                        <Image src={banner} alt="Cover Image" h="100%" objectFit="cover" />
                    </Box>

                    <Box flex="1" p={8} textAlign="center" color="white">
                        <Heading as="h1" fontSize="4xl" mb={4}>
                            Artfinder
                        </Heading>
                        <Text fontSize="xl" mb={4}>
                            Discover and explore art from around the world.
                        </Text>
                        <Button colorScheme="blue" size="lg">
                            Explore Artfinder
                        </Button>
                    </Box>
                </Flex>

                {/* Featured Section */}
                <Box mt={16} mx={10} id="features">
                    <Heading as="h2" fontSize="3xl" textAlign="center">
                        Featured
                    </Heading>
                    <Flex justify="space-around" mt={8}>
                        {/* Feature 1 */}
                        <Box>
                            <Image src="/feature1-image.jpg" alt="Feature 1" />
                            <Heading as="h3" fontSize="xl" mt={4}>
                                Feature 1
                            </Heading>
                            <Text mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula sapien.
                            </Text>
                        </Box>

                        {/* Feature 2 */}
                        <Box>
                            <Image src="/feature2-image.jpg" alt="Feature 2" />
                            <Heading as="h3" fontSize="xl" mt={4}>
                                Feature 2
                            </Heading>
                            <Text mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula sapien.
                            </Text>
                        </Box>

                        {/* Feature 3 */}
                        <Box>
                            <Image src="/feature3-image.jpg" alt="Feature 3" />
                            <Heading as="h3" fontSize="xl" mt={4}>
                                Feature 3
                            </Heading>
                            <Text mt={2}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula sapien.
                            </Text>
                        </Box>
                    </Flex>
                </Box>

                {/* About Section */}
                <Box mt={16} mx={10} id="about">
                    <Heading as="h2" fontSize="3xl" textAlign="center">
                        About
                    </Heading>
                    <Text mt={8}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ligula sapien. Phasellus eleifend
                        lobortis justo, ac sollicitudin odio efficitur in. Vestibulum ante ipsum primis in faucibus orci luctus et
                        ultrices posuere cubilia curae; Praesent dapibus gravida dapibus. Proin faucibus tincidunt nibh at
                        ullamcorper. Donec tincidunt nulla ut dignissim convallis. Pellentesque iaculis libero justo, sed rutrum
                        mi auctor nec.
                    </Text>
                    <Flex justify="center" mt={4}>
                        <Link href="https://github.com/your-repo" color="blue.500" mr={4}>
                            GitHub Repository
                        </Link>
                        <Link href="https://linkedin.com/your-profile" color="blue.500" mr={4}>
                            LinkedIn
                        </Link>
                        <Link href="https://twitter.com/your-profile" color="blue.500">
                            Twitter
                        </Link>
                    </Flex>
                </Box>

                {/* Video Section */}
                <Box mt={16} mx={10}>
                    <Heading as="h2" fontSize="3xl" textAlign="center">
                        Project Video
                    </Heading>
                    <Box mt={8} textAlign="center">
                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/your-video-id"
                            title="Project Video"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default LandingPage;