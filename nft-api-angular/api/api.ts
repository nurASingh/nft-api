export * from './account.service';
import { AccountService } from './account.service';
export * from './nft.service';
import { NftService } from './nft.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AccountService, NftService, UserService];
