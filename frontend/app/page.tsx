'use client'
import InstructionsComponent from "@/components/instructionsComponent";
import styles from "./page.module.css";
import "./globals.css";
import { ChakraProvider } from '@chakra-ui/react';
import { SendTransaction } from "@/components/send-transaction";
import { SendERC20 } from "@/components/send-erc20";

export default function Home() {
  return (
    <ChakraProvider>
      <main className={styles.main}>
        <InstructionsComponent></InstructionsComponent>
        <SendTransaction />
        <SendERC20 />
      </main>
    </ChakraProvider>
  );
}
