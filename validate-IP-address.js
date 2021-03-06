/*
Task Link: https://leetcode.com/problems/validate-ip-address/

Difficulty: Medium

Description:
IPv4 addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,172.16.254.1;
Besides, leading zeros in the IPv4 is invalid. For example, the address 172.16.254.01 is invalid.

IPv6 addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":").
For example, the address 2001:0db8:85a3:0000:0000:8a2e:0370:7334 is a valid one.
Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones,
so 2001:db8:85a3:0:0:8A2E:0370:7334 is also a valid IPv6 address(Omit leading zeros and using upper cases).

Example 1:
Input: "2001:0db8:85a3:0:0:8A2E:0370:7334"
Output: "IPv6"
Explanation: This is a valid IPv6 address, return "IPv6".

Example 2:
Input: "256.256.256.256"
Output: "Neither"
Explanation: This is neither a IPv4 address nor a IPv6 address.
*/

/**
 * @param {string} IP
 * @return {string}
 */

const validIPAddress = function(IP) {
  if (/^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2})\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-5]{2})$/.test(IP)) {
    return 'IPv4';
  }
  if (/^([0-9a-f]{1,4}:){7}[0-9a-f]{1,4}$/i.test(IP)) {
    return 'IPv6';
  }
  return 'Neither';
};
