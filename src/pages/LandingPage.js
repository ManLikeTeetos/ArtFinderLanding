import {Box, Button, ChakraProvider, Flex, Heading, Image, Link, Text} from '@chakra-ui/react';
import {useState, useEffect} from "react";
import banner from '../images/banner.jpg';
import signup from '../images/signup.jpg';
import gallery from '../images/gallery.jpg';
import update from '../images/update.jpg';
import about from '../images/afgallery.png';
import introData from '../introdata.json';
import featuresData from '../featuresdata.json';
import aboutData from '../aboutdata.json';

function LandingPage() {

    const [features, setFeatures] = useState([]);
    const [aboutinfo, setAboutinfo] = useState([]);
    const [intro, setIntro] = useState([]);

    useEffect(() => {
        // Simulate fetching features data from an API
        setFeatures(featuresData);
        setAboutinfo(aboutData);
        setIntro(introData);
    }, []);


    return (
        <ChakraProvider>
            <Box>
                {/* Menu Bar */}
                <Flex align="center"
                      justify="space-between"
                      p={4}
                      top={0}
                      position="sticky"
                      zIndex={1}
                      bg="white"
                >
                    <Heading as="h1" fontSize="xl">
                        {introData[0].name}
                    </Heading>
                    <Flex>
                        <Link href="#" fontSize="xl" mr={8} fontWeight="semibold"> Home </Link>
                        <Link href="#features" fontSize="xl" mr={8} fontWeight="semibold"> Features </Link>
                        <Link href="#about" fontSize="xl" mr={8} fontWeight="semibold"> About </Link>
                        <Link href="#work" fontSize="xl" mr={{base: 0, md: 20}} fontWeight="semibold"> How It
                            Works </Link>
                    </Flex>
                </Flex>
                {/* Intro Section */}
                <Flex bg="gray.100" position="relative" alignItems="center" height="100vh">
                    <Box position="absolute" top={0} left={0} width="100%" height="100%">
                        <Image src={banner} alt="Cover Image" objectFit="cover" width="100%" height="100%"/>
                    </Box>

                    <Box position="relative" zIndex={1} p={12} textAlign="left" color="black" width="40%" bg="white">
                        <Heading as="h1" fontSize="4xl" mb={4}>
                            {introData[0].name}
                        </Heading>
                        <Text fontSize="xl" mb={4} fontWeight="light">
                            {introData[0].desc}
                        </Text>
                        <Button colorScheme="blue" size="lg" mt={12}>
                            Explore Artfinder
                        </Button>
                    </Box>
                </Flex>

                {/* Featured Section */}
                <Box mt={16} mx={10} id="features">
                    <Heading as="h4" fontSize="4xl" mb={4} textAlign="center" color="#3182ce">
                        Art Finder Features
                    </Heading>
                    <Heading as="h1" fontSize="xl" textAlign="center" fontWeight="light">
                        Here a some of the exciting features of ArtFinder
                    </Heading>
                    <Flex direction="column" mt={8}>
                        {/* Feature 1 */}
                        <Flex alignItems="start" height="400px" mb={24}>
                            <Box flex="1">
                                <Image src={signup} alt="Feature 1"/>
                            </Box>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h4" fontSize="3xl" mt={{base: 4, md: 12}}>
                                    {featuresData[0].name}
                                </Heading>
                                <Text mt={4} fontSize="xl" fontWeight="light">
                                    {featuresData[0].description}
                                </Text>
                            </Box>
                        </Flex>

                        {/* Feature 2 */}
                        <Flex alignItems="start" height="400px" mb={24}>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h3" fontSize="3xl" mt={4}>
                                    {featuresData[1].name}
                                </Heading>
                                <Text mt={4} fontSize="xl" fontWeight="light">
                                    {featuresData[1].description}
                                </Text>
                            </Box>
                            <Box flex="1">
                                <Image src={gallery} alt="Feature 2"/>
                            </Box>

                        </Flex>

                        {/* Feature 3 */}
                        <Flex alignItems="start" height="400px" mb={24}>
                            <Box flex="1">
                                <Image src={update} alt="Feature 3"/>
                            </Box>
                            <Box flex="1" ml={{base: 0, md: 8}}>
                                <Heading as="h3" fontSize="3xl" mt={4}>
                                    {featuresData[2].name}
                                </Heading>
                                <Text mt={4} fontSize="xl" fontWeight="light">
                                    {featuresData[2].description}
                                </Text>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>


                {/* About Section */}
                <Box mt={16} mx={10} textAlign="center">
                    <Heading as="h2" fontSize="3xl" mb={4}>
                        About ArtFinder
                    </Heading>
                </Box>
                <Box mt={16} mx={10} id="about" height="600px" display="flex" boxShadow="xl">
                    {/* Image */}
                    <Box flex="1">
                        <Image src={about} alt="About Image" h="80%" objectFit="cover"/>
                    </Box>

                    {/* Text */}
                    <Box flex="1" p={8} textAlign="left">
                        {aboutData.map((item, index) => (
                            <div key={index}>
                                <Heading as="h2" fontSize="2xl" >
                                    {item.name}
                                </Heading>
                                <Text my={4} fontWeight="light" fontSize="m">
                                    {item.description}
                                </Text>
                            </div>
                        ))}
                        <Box textAlign="center" mt={4}>
                            <Link href="https://github.com/ManLikeTeetos/ArtFinderLanding" color="blue.500" mr={4}>
                                GitHub Repository
                            </Link>
                            <Link href="https://www.linkedin.com/in/ade-ojo-toluwanimi/" color="blue.500" mr={4}>
                                LinkedIn
                            </Link>
                            <Link href="https://twitter.com/ManLikeTeetos" color="blue.500">
                                Twitter
                            </Link>
                        </Box>
                    </Box>
                </Box>


                {/* Video Section */}
                <Box id="work" mt={16} py={16} bg="#a52a2a8a" color="white">
                    <Heading as="h2" fontSize="3xl" textAlign="center">
                        How it Works
                    </Heading>
                    <Heading as="h1" fontSize="xl" textAlign="center" fontWeight="light">
                        Watch a quick video to see how Artfinder helps you navigate the Art World.
                    </Heading>
                    <Box mt={16} textAlign="center" >
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ position: 'relative', width: '70%', paddingBottom: '56.25%' }}>
                                <iframe
                                    src="https://www.loom.com/embed/1bb7f6053d644e449c0252c066d3f0c8"
                                    title="Project Video"
                                    frameBorder="0"
                                    webkitallowfullscreen
                                    mozallowfullscreen
                                    allowFullScreen
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '70%' }}
                                ></iframe>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </ChakraProvider>
    );
}

export default LandingPage;