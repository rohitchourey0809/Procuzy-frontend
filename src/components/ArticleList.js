// src/components/ArticleList.js
import React from "react";
import { Box, Text, Link, VStack } from "@chakra-ui/react";

function ArticleList({ articles }) {
  return (
    <VStack spacing={4} align="stretch">
      {articles.map((article, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Text fontSize="xl">{article.title}</Text>
          <Text mt={2}>
            By {article.author} on{" "}
            {new Date(article.publicationDate).toLocaleDateString()}
          </Text>
          <Link href={article.url} isExternal color="teal.500">
            Read more
          </Link>
        </Box>
      ))}
    </VStack>
  );
}

export default ArticleList;
