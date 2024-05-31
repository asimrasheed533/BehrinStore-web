import { atomWithStorage } from "jotai/utils";
import { useLocation } from "react-router-dom";

export function useBackLocation() {
  const location = useLocation();
  return location.pathname
    .toLowerCase()
    .replace("/" + location.pathname.toLowerCase().split("/")[3], "");
}

export const userAtom = atomWithStorage("user", null);

export const sidebarCategories = [
  "",
  // "User Management",
  // "Order Management",
  "Settings",
];

export const sidebarEnteries = [
  {
    category: "",
    icon: (
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_165_12269)">
          <path d="M5.66667 0H2.125C1.56141 0 1.02091 0.223883 0.622398 0.622398C0.223883 1.02091 0 1.56141 0 2.125L0 5.66667H2.125L2.11013 7.79167L3.52679 7.79875L3.54167 5.66667H5.66667V3.53033L7.79167 3.54167L7.79875 2.125L5.66667 2.11367V0ZM4.25 4.25H1.41667V2.125C1.41667 1.93714 1.49129 1.75697 1.62413 1.62413C1.75697 1.49129 1.93714 1.41667 2.125 1.41667H4.25V4.25Z" />
          <path d="M14.8753 0H11.3336V2.125L9.21216 2.11367L9.20508 3.53033L11.3336 3.54167V5.66667H13.4692L13.4586 7.79167L14.8753 7.79875L14.8859 5.66667H17.0003V2.125C17.0003 1.56141 16.7764 1.02091 16.3779 0.622398C15.9794 0.223883 15.4389 0 14.8753 0V0ZM15.5836 4.25H12.7503V1.41667H14.8753C15.0631 1.41667 15.2433 1.49129 15.3762 1.62413C15.509 1.75697 15.5836 1.93714 15.5836 2.125V4.25Z" />
          <path d="M14.8905 9.21216L13.4739 9.20508L13.4625 11.3336H11.334V13.47L9.21253 13.4586L9.20898 14.8753L11.334 14.8866V17.0003H14.8756C15.4392 17.0003 15.9797 16.7764 16.3782 16.3779C16.7768 15.9794 17.0006 15.4389 17.0006 14.8753V11.3336H14.8756L14.8905 9.21216ZM15.584 14.8753C15.584 15.0631 15.5093 15.2433 15.3765 15.3762C15.2437 15.509 15.0635 15.5836 14.8756 15.5836H12.7506V12.7503H15.584V14.8753Z" />
          <path d="M5.66667 11.332H3.53104L3.54167 9.21057L2.125 9.20703L2.11437 11.332H0V14.8737C0 15.4373 0.223883 15.9778 0.622398 16.3763C1.02091 16.7748 1.56141 16.9987 2.125 16.9987H5.66667V14.8737L7.79167 14.8886L7.79875 13.4719L5.66667 13.4606V11.332ZM4.25 15.582H2.125C1.93714 15.582 1.75697 15.5074 1.62413 15.3746C1.49129 15.2417 1.41667 15.0616 1.41667 14.8737V12.7487H4.25V15.582Z" />
        </g>
        <defs>
          <clipPath id="clip0_165_12269">
            <rect width="17" height="17" fill="white" />
          </clipPath>
        </defs>
      </svg>
    ),
    name: "Dashboard",
    path: "/dashboard",
  },
  // {
  //   category: "User Management",
  //   icon: (
  //     <svg
  //       width="17"
  //       height="17"
  //       viewBox="0 0 17 17"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M12.2798 16.6291C9.74053 16.6291 7.25414 16.6291 4.71484 16.6291C4.71484 16.5762 4.71484 16.4968 4.71484 16.4439C4.71484 15.2536 4.71484 14.0898 4.71484 12.8995C4.71484 11.0215 5.93159 9.51377 7.75671 9.11701C9.81988 8.66734 11.936 10.1221 12.2534 12.2118C12.2798 12.4234 12.3063 12.6614 12.3063 12.873C12.3063 14.0633 12.3063 15.2536 12.3063 16.4175C12.2798 16.4968 12.2798 16.5497 12.2798 16.6291Z" />
  //       <path d="M4.34457 13.3758C2.88977 13.3758 1.46142 13.3758 0.0330637 13.3758C0.0330637 13.3493 0.00661276 13.3229 0.00661276 13.2964C0.00661276 11.9739 -0.0198382 10.6513 0.0330637 9.32878C0.0859657 7.68882 1.30271 6.31337 2.88977 5.9166C3.6833 5.73145 4.42393 5.78435 5.191 6.07531C5.34971 6.12821 5.42906 6.20756 5.45551 6.39272C5.61422 7.50366 6.22259 8.27074 7.20128 8.77331C7.22773 8.79976 7.28063 8.79976 7.33353 8.82621C5.24391 9.61974 4.26522 11.1539 4.34457 13.3758Z" />
  //       <path d="M12.6491 13.3776C12.7285 11.1557 11.7498 9.62156 9.66016 8.82804C9.71306 8.80158 9.73951 8.77513 9.79241 8.77513C10.824 8.27257 11.4324 7.42613 11.5646 6.28874C11.5646 6.20939 11.6704 6.13003 11.7233 6.10358C12.8343 5.65392 13.9452 5.68037 15.0033 6.26229C16.2994 6.97647 16.9606 8.11386 16.9871 9.62156C17.0135 10.8119 16.9871 12.0286 16.9871 13.2189C16.9871 13.2718 16.9871 13.3247 16.9606 13.3776C15.5058 13.3776 14.1039 13.3776 12.6491 13.3776Z" />
  //       <path d="M5.77148 5.96948C5.77148 4.48823 6.98823 3.27148 8.49594 3.27148C9.97719 3.27148 11.1939 4.48823 11.1939 5.99594C11.1939 7.47719 9.95074 8.69394 8.46948 8.69394C6.98823 8.69394 5.77148 7.47719 5.77148 5.96948Z" />
  //       <path d="M3.5782 5.44045C2.3879 5.44045 1.19761 4.32951 1.0918 2.95406C0.986001 1.55215 1.96469 0.282504 3.36659 0.0708961C4.39818 -0.0878098 5.27106 0.256054 5.93233 1.07603C6.56716 1.89601 6.69941 2.79535 6.30265 3.77403C6.19684 4.01209 6.01169 4.2237 5.85298 4.43531C5.72073 4.59401 5.58847 4.77917 5.42977 4.91143C4.95365 5.28174 4.39818 5.4669 3.5782 5.44045Z" />
  //       <path d="M13.3662 5.44065C12.5727 5.44065 12.0172 5.2555 11.5411 4.85873C11.3824 4.72648 11.2766 4.56777 11.1443 4.40907C11.0914 4.32971 11.0385 4.25036 10.9856 4.171C10.2979 3.27167 10.3508 2.31944 10.8534 1.39365C11.3824 0.388514 12.5727 -0.166956 13.6572 0.0446517C14.8475 0.282711 15.6939 1.15559 15.8791 2.34589C16.0907 4.0123 14.821 5.4671 13.3662 5.44065Z" />
  //     </svg>
  //   ),
  //   name: "Customers",
  //   path: "/dashboard/customers",
  // },

  // {
  //   category: "Order Management",
  //   icon: (
  //     <svg
  //       width="18"
  //       height="18"
  //       viewBox="0 0 18 18"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M3.26468 0C3.29144 0.428155 3.34496 0.856311 3.37172 1.28447C3.39848 1.55206 3.452 1.84642 3.452 2.11402C3.452 2.27458 3.50552 2.30134 3.63932 2.30134C5.48574 2.30134 7.35892 2.30134 9.20534 2.30134C9.25886 2.30134 9.33914 2.30134 9.41942 2.30134C9.07154 3.9872 9.47294 5.45898 10.7574 6.60965C12.0419 7.76032 13.5404 8.00115 15.1995 7.46596C15.039 9.12506 14.8784 10.7842 14.6911 12.4433C14.6108 12.4433 14.5305 12.4433 14.4502 12.4433C10.9982 12.4433 7.54624 12.4433 4.09424 12.4433C3.96044 12.4433 3.82664 12.4433 3.7196 12.4968C3.42524 12.5771 3.23793 12.8982 3.29144 13.1925C3.34496 13.4869 3.5858 13.7277 3.88016 13.7545C3.93368 13.7545 4.01396 13.7545 4.06748 13.7545C7.51948 13.7545 10.9982 13.7545 14.4502 13.7545C14.5305 13.7545 14.584 13.7545 14.6643 13.7545C14.6643 14.1024 14.6643 14.4235 14.6643 14.7446C14.2629 14.7446 13.8615 14.7446 13.4601 14.7446C13.7277 15.6009 13.5404 16.2967 12.7911 16.8051C12.2024 17.1797 11.587 17.153 10.9982 16.7516C10.3025 16.2699 10.1419 15.5742 10.3828 14.7714C9.4997 14.7714 8.61663 14.7714 7.7068 14.7714C7.97439 15.6544 7.76032 16.4037 6.93077 16.8586C6.31529 17.2065 5.67306 17.1262 5.13786 16.6713C4.52239 16.1629 4.38859 15.5206 4.65619 14.7446C4.41535 14.7446 4.20127 14.7446 3.96044 14.7446C3.66608 14.7446 3.37172 14.6911 3.10413 14.5305C2.51541 14.1826 2.22106 13.6742 2.27458 13.0052C2.30134 12.363 2.64921 11.9081 3.21117 11.6137C3.26468 11.587 3.3182 11.5602 3.37172 11.5334C3.02385 8.02791 2.67597 4.52239 2.32809 1.01687C1.55206 1.01687 0.776032 1.01687 0 1.01687C0 0.695753 0 0.347876 0 0.0267597C1.09715 3.78813e-08 2.16754 0 3.26468 0ZM6.28853 9.17858C6.28853 9.4997 6.28853 9.82081 6.28853 10.1419C6.60965 10.1419 6.93077 10.1419 7.25188 10.1419C7.25188 9.82081 7.25188 9.4997 7.25188 9.17858C6.93077 9.17858 6.63641 9.17858 6.28853 9.17858ZM9.57998 9.17858C9.25886 9.17858 8.93774 9.17858 8.61663 9.17858C8.61663 9.4997 8.61663 9.82081 8.61663 10.1419C8.93774 10.1419 9.25886 10.1419 9.57998 10.1419C9.57998 9.82081 9.57998 9.4997 9.57998 9.17858ZM11.8546 10.1419C11.8546 9.82081 11.8546 9.4997 11.8546 9.17858C11.5334 9.17858 11.2123 9.17858 10.8912 9.17858C10.8912 9.4997 10.8912 9.82081 10.8912 10.1419C11.2123 10.1419 11.5334 10.1419 11.8546 10.1419Z" />
  //       <path d="M14.0216 0C14.1554 0.0267597 14.3159 0.0535194 14.4497 0.107039C16.0553 0.508435 17.1525 2.00698 16.9919 3.66608C16.8314 5.5125 15.2258 6.87725 13.3794 6.74345C11.7738 6.60965 10.5161 5.40546 10.302 3.82664C10.0611 2.00698 11.3724 0.294357 13.1653 0.0535194C13.192 0.0535194 13.2456 0.0267597 13.2723 0.0267597C13.5399 3.78813e-08 13.7808 0 14.0216 0ZM13.1118 5.03083C13.9681 4.17451 14.8244 3.3182 15.6539 2.48865C15.4399 2.27458 15.199 2.03374 14.9582 1.7929C14.3695 2.40837 13.754 3.02385 13.1118 3.63932C12.8174 3.34496 12.523 3.05061 12.2554 2.78301C12.0146 3.02385 11.7738 3.26468 11.5597 3.47876C12.0681 3.9872 12.6033 4.52239 13.1118 5.03083Z" />
  //     </svg>
  //   ),
  //   name: "Orders",
  //   path: "/dashboard/orders",
  // },
  {
    category: "Settings",
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7.92249 0.0246083C8.43927 0.196866 8.93143 0.369125 9.44821 0.541383C10.0634 0.738249 10.6786 0.959724 11.2938 1.15659C11.343 1.1812 11.3923 1.1812 11.4661 1.23042C11.0477 1.37806 10.654 1.50111 10.2603 1.62415C9.49742 1.89484 8.70996 2.14092 7.92249 2.38701C7.84867 2.41161 7.75023 2.41161 7.70102 2.41161C6.54443 2.04249 5.38784 1.64876 4.23125 1.25502C4.20664 1.25502 4.18203 1.23042 4.13281 1.20581C4.23125 1.1812 4.30507 1.13198 4.4035 1.10737C5.46166 0.762857 6.54443 0.393733 7.60258 0.0492166C7.62719 0.0492166 7.6518 0.0246083 7.67641 0C7.75023 0.0246083 7.84867 0.0246083 7.92249 0.0246083Z" />
        <path d="M4.13281 2.19141C4.77263 2.41288 5.41245 2.60975 6.02765 2.83122C6.42139 2.95426 6.81512 3.10191 7.23346 3.22495C7.30728 3.24956 7.3565 3.27417 7.3565 3.3726C7.3565 4.92293 7.3565 6.47325 7.3565 8.04818C7.3565 8.07279 7.3565 8.07279 7.3565 8.12201C7.25807 8.0974 7.18424 8.07279 7.11042 8.02357C6.1753 7.70367 5.24019 7.40837 4.30507 7.08846C4.18203 7.06385 4.15742 7.01463 4.15742 6.86698C4.15742 5.36588 4.15742 3.86477 4.15742 2.36366C4.13281 2.31445 4.13281 2.26523 4.13281 2.19141Z" />
        <path d="M11.4686 2.19141C11.4686 2.24062 11.4686 2.31445 11.4686 2.36366C11.4686 3.86477 11.4686 5.36588 11.4686 6.86698C11.4686 6.99003 11.444 7.03924 11.321 7.08846C10.3366 7.40837 9.3769 7.72827 8.39257 8.04818C8.34336 8.07279 8.31875 8.07279 8.26953 8.0974C8.26953 8.04818 8.26953 7.99897 8.26953 7.94975C8.26953 6.42403 8.26953 4.92293 8.26953 3.39721C8.26953 3.32339 8.26953 3.24956 8.36796 3.22495C9.37691 2.90505 10.3612 2.56053 11.3702 2.24062C11.3948 2.21601 11.4194 2.21601 11.4686 2.19141Z" />
        <path d="M4.13281 15.6747C4.13281 14.0752 4.13281 12.5003 4.13281 10.9253C5.19097 10.5808 6.24913 10.2117 7.33189 9.86719C7.33189 9.9164 7.33189 9.96562 7.33189 10.0148C7.33189 11.4913 7.33189 12.9924 7.33189 14.4689C7.33189 14.5428 7.33189 14.6166 7.23346 14.6412C6.22452 14.9611 5.21558 15.3056 4.20664 15.6501C4.18203 15.6501 4.18203 15.6747 4.13281 15.6747Z" />
        <path d="M8.26953 9.86719C8.63866 9.99023 8.98317 10.1133 9.30308 10.2117C9.99211 10.4332 10.6565 10.6547 11.3456 10.9007C11.4194 10.9253 11.4686 10.95 11.4686 11.0484C11.4686 12.5741 11.4686 14.0998 11.4686 15.6255C11.4686 15.6501 11.4686 15.6501 11.4686 15.6747C11.3948 15.6501 11.3456 15.6501 11.2717 15.6255C10.312 15.3056 9.3523 14.9857 8.41718 14.6658C8.29414 14.6166 8.26953 14.592 8.26953 14.4443C8.26953 12.9678 8.26953 11.4913 8.26953 10.0148C8.26953 9.99023 8.26953 9.94101 8.26953 9.86719Z" />
        <path d="M3.19908 15.6747C2.21475 15.3548 1.25502 15.0349 0.295299 14.715C0.0984325 14.6412 0 14.5182 0 14.2967C0 12.8448 0 11.3683 0 9.9164C0 9.9164 0 9.8918 0 9.86719C0.0492166 9.86719 0.0984328 9.8918 0.147649 9.8918C1.13198 10.2117 2.11631 10.5562 3.07604 10.8761C3.14986 10.9007 3.19908 10.9253 3.19908 11.0238C3.19908 12.5495 3.19908 14.0752 3.19908 15.6009C3.22369 15.6255 3.19908 15.6501 3.19908 15.6747Z" />
        <path d="M12.4023 10.9253C13.4605 10.5808 14.5187 10.2117 15.6014 9.86719C15.6014 9.94101 15.6014 9.99023 15.6014 10.0394C15.6014 11.4421 15.6014 12.8202 15.6014 14.2229C15.6014 14.5428 15.503 14.6658 15.2077 14.7642C14.3218 15.0595 13.4113 15.3548 12.5254 15.6747C12.4762 15.6994 12.4516 15.6994 12.4023 15.6994C12.4023 14.0998 12.4023 12.5249 12.4023 10.9253Z" />
        <path d="M7.3321 8.90669C6.7169 9.10355 6.1509 9.30042 5.58491 9.49729C4.99431 9.69415 4.37911 9.89102 3.78851 10.0879C3.71468 10.1125 3.64086 10.1125 3.59164 10.0879C2.43505 9.71876 1.30307 9.32503 0.146479 8.9559C0.121871 8.9559 0.0726541 8.93129 0.0234375 8.90669C0.0726541 8.88208 0.12187 8.85747 0.171087 8.85747C1.30307 8.48835 2.43505 8.09461 3.54242 7.72549C3.61625 7.70088 3.69007 7.70088 3.7639 7.72549C4.92049 8.09461 6.07708 8.48834 7.20906 8.88208C7.23367 8.85747 7.28289 8.85747 7.3321 8.90669Z" />
        <path d="M8.26953 8.88325C8.88474 8.68638 9.45073 8.48952 10.0413 8.29265C10.6319 8.09578 11.1979 7.89892 11.7885 7.70205C11.8623 7.67744 11.9362 7.67744 12.01 7.70205C13.1666 8.07117 14.3232 8.46491 15.4798 8.85864C15.5044 8.85864 15.529 8.88325 15.5782 8.88325C15.529 8.90786 15.5044 8.93246 15.4798 8.93246C14.3232 9.3262 13.1666 9.69532 12.0346 10.0891C11.9854 10.1137 11.9116 10.1137 11.887 10.0891C10.7058 9.69532 9.54916 9.30159 8.36796 8.90786C8.34336 8.90786 8.31875 8.90786 8.26953 8.88325Z" />
      </svg>
    ),
    name: "Products",
    path: "/dashboard/products",
  },

  {
    category: "Settings",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.0253906 2.41154C0.050779 2.2846 0.101554 2.13227 0.126943 2.00532C0.456991 0.812072 1.52331 0.0250324 2.74195 0.0250324C3.60515 0.0250324 4.46835 0.0504208 5.33156 0.0250324C6.77869 -0.0257443 8.0735 1.14212 8.12427 2.64003C8.14966 3.65557 8.14966 4.64571 8.09889 5.66125C8.04811 6.82911 7.10874 7.84465 5.96626 8.07314C5.76316 8.12392 5.53466 8.12392 5.33156 8.12392C4.49374 8.12392 3.65593 8.12392 2.81811 8.12392C1.39636 8.12392 0.304664 7.18455 0.0507805 5.78819C0.0507805 5.7628 0.0253906 5.73742 0.0253906 5.71203C0.0253906 4.59494 0.0253906 3.50324 0.0253906 2.41154Z" />
        <path d="M12.2889 18.0008C12.1619 17.9754 12.035 17.95 11.908 17.8992C10.7656 17.5692 9.95314 16.6044 9.92775 15.3858C9.87698 14.3703 9.90237 13.3547 9.92775 12.3392C9.97853 11.1713 10.9433 10.1558 12.0604 9.9273C12.1873 9.90191 12.3396 9.87652 12.4666 9.87652C13.4821 9.87652 14.4977 9.85113 15.5132 9.87652C16.7064 9.90191 17.7981 10.9428 17.9505 12.1107C17.9759 12.3646 17.9759 12.5931 17.9759 12.847C17.9759 13.634 17.9759 14.4464 17.9759 15.2335C17.9759 16.579 17.0111 17.6961 15.6909 17.8992C15.6655 17.8992 15.6401 17.9246 15.6147 17.9246C14.5484 18.0008 13.406 18.0008 12.2889 18.0008Z" />
        <path d="M0.0253899 12.3137C0.0507783 12.1868 0.0761635 12.0599 0.101552 11.9329C0.406212 10.7904 1.39636 9.95263 2.58962 9.92724C3.60515 9.90186 4.62068 9.90186 5.63622 9.92724C6.88025 9.97802 8.04811 11.0951 8.09888 12.3391C8.14966 13.4054 8.14966 14.4718 8.09888 15.5127C8.04811 16.7567 7.05796 17.7722 5.83932 17.9753C5.81393 17.9753 5.76316 18.0007 5.73777 18.0007C4.62068 18.0007 3.47821 18.0007 2.36112 18.0007C2.33573 18.0007 2.31034 17.9753 2.28495 17.9753C1.14248 17.7469 0.4316 17.0868 0.101552 15.9951C0.0761635 15.8681 0.0507767 15.7412 0 15.6142C0.0253884 14.5225 0.0253899 13.4308 0.0253899 12.3137Z" />
        <path d="M9.92686 4.06214C9.92686 3.52898 9.90148 2.99582 9.92686 2.43728C10.003 1.26942 10.9932 0.203105 12.1357 0.025386C12.288 -2.32475e-06 12.4657 0 12.618 0C13.5066 0 14.4206 0 15.3092 0C16.7817 0 18.0004 1.21864 18.0004 2.69116C18.0004 3.57976 18.0004 4.49374 18.0004 5.38233C18.0004 6.90563 16.8071 8.09888 15.3092 8.12427C14.3952 8.12427 13.5066 8.12427 12.5926 8.12427C11.2471 8.09888 10.1046 7.13413 9.92686 5.81393C9.87609 5.23 9.92686 4.64607 9.92686 4.06214Z" />
      </svg>
    ),
    name: "Categories",
    path: "/dashboard/categories",
  },
];